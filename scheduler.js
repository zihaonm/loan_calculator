// Payment Reminder Scheduler Module

const TelegramBot = require('./telegram.js');

class ReminderScheduler {
  constructor() {
    this.checkInterval = null;
    this.isRunning = false;
  }

  /**
   * Start the scheduler
   * Checks for reminders immediately and then every 24 hours
   */
  start() {
    if (this.isRunning) {
      console.log('Scheduler is already running');
      return;
    }

    console.log('Starting reminder scheduler...');
    this.isRunning = true;

    // Check immediately on startup
    this.checkReminders();

    // Check every hour (for more responsive reminders)
    // In production, you might want to check less frequently
    const checkIntervalMs = 60 * 60 * 1000; // 1 hour
    this.checkInterval = setInterval(() => {
      this.checkReminders();
    }, checkIntervalMs);

    console.log('Reminder scheduler started. Checking every hour.');
  }

  /**
   * Stop the scheduler
   */
  stop() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
      this.isRunning = false;
      console.log('Reminder scheduler stopped');
    }
  }

  /**
   * Main function to check and send reminders
   */
  async checkReminders() {
    console.log('Checking for payment reminders...', new Date().toISOString());

    try {
      // Get bot token from localStorage
      const botToken = localStorage.getItem('telegramBotToken');
      if (!botToken) {
        console.log('No Telegram bot token configured. Skipping reminder check.');
        return;
      }

      // Get loan history
      const history = JSON.parse(localStorage.getItem('loanHistory') || '[]');
      if (history.length === 0) {
        console.log('No loan history found. Skipping reminder check.');
        return;
      }

      // Get sent reminders tracking
      const sentReminders = JSON.parse(localStorage.getItem('sentReminders') || '{}');

      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison

      const bot = new TelegramBot(botToken);
      let remindersSent = 0;

      // Check each loan
      for (const loan of history) {
        // Skip if reminders disabled or no Telegram username
        if (!loan.enableReminders || !loan.telegramUsername) {
          continue;
        }

        // Get or resolve chat ID
        let chatId = loan.telegramChatId;
        if (!chatId) {
          console.log(`Resolving chat ID for ${loan.telegramUsername}...`);
          const result = await bot.getUserChatId(loan.telegramUsername);
          if (result.success) {
            chatId = result.chatId;
            // Update loan with chat ID for future use
            this.updateLoanChatId(loan.id, chatId);
          } else {
            console.error(`Failed to resolve chat ID for ${loan.telegramUsername}:`, result.error);
            continue;
          }
        }

        // Check each payment in the amortization schedule
        const schedule = loan.amortizationSchedule || [];
        for (let i = 0; i < schedule.length; i++) {
          const payment = schedule[i];
          const paymentDate = new Date(payment.date);
          paymentDate.setHours(0, 0, 0, 0);

          // Calculate days until payment
          const daysUntil = Math.ceil((paymentDate - today) / (1000 * 60 * 60 * 24));

          // Check if reminder should be sent
          const shouldSendToday = daysUntil === 0; // Payment due today
          const shouldSendBefore = loan.reminderDaysBefore > 0 && daysUntil === loan.reminderDaysBefore;

          if (shouldSendToday || shouldSendBefore) {
            const reminderKey = `${loan.id}_${i}_${shouldSendToday ? 'day' : 'before'}`;

            // Check if already sent
            if (sentReminders[reminderKey]) {
              const sentDate = new Date(sentReminders[reminderKey].dateSent);
              sentDate.setHours(0, 0, 0, 0);

              // Skip if already sent today
              if (sentDate.getTime() === today.getTime()) {
                continue;
              }
            }

            // Send reminder
            console.log(`Sending reminder for loan ${loan.id}, payment ${i + 1}/${schedule.length}`);

            const reminderData = {
              customerName: loan.customerName,
              issuerName: loan.issuerName,
              paymentAmount: payment.payment.toFixed(2),
              paymentDate: this.formatDate(paymentDate),
              paymentNumber: i + 1,
              totalPayments: schedule.length,
              daysUntil: daysUntil
            };

            const result = await bot.sendPaymentReminder(
              chatId,
              reminderData,
              loan.language || 'en'
            );

            if (result.success) {
              console.log(`Reminder sent successfully for loan ${loan.id}, payment ${i + 1}`);

              // Mark as sent
              sentReminders[reminderKey] = {
                dateSent: new Date().toISOString(),
                messageId: result.messageId,
                type: shouldSendToday ? 'on-day' : `before-${loan.reminderDaysBefore}`
              };

              remindersSent++;
            } else {
              console.error(`Failed to send reminder for loan ${loan.id}, payment ${i + 1}:`, result.error);
            }
          }
        }
      }

      // Save updated sent reminders
      localStorage.setItem('sentReminders', JSON.stringify(sentReminders));

      console.log(`Reminder check completed. ${remindersSent} reminders sent.`);

      // Clean up old sent reminder records (older than 60 days)
      this.cleanupOldReminders();

    } catch (error) {
      console.error('Error checking reminders:', error);
    }
  }

  /**
   * Update loan with resolved chat ID
   * @param {number} loanId - Loan ID
   * @param {number} chatId - Telegram chat ID
   */
  updateLoanChatId(loanId, chatId) {
    try {
      const history = JSON.parse(localStorage.getItem('loanHistory') || '[]');
      const loan = history.find(l => l.id === loanId);

      if (loan) {
        loan.telegramChatId = chatId;
        localStorage.setItem('loanHistory', JSON.stringify(history));
        console.log(`Updated loan ${loanId} with chat ID ${chatId}`);
      }
    } catch (error) {
      console.error('Error updating loan chat ID:', error);
    }
  }

  /**
   * Clean up old sent reminder records (older than 60 days)
   */
  cleanupOldReminders() {
    try {
      const sentReminders = JSON.parse(localStorage.getItem('sentReminders') || '{}');
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - 60);

      let cleaned = 0;
      Object.keys(sentReminders).forEach(key => {
        const reminder = sentReminders[key];
        const sentDate = new Date(reminder.dateSent);

        if (sentDate < cutoffDate) {
          delete sentReminders[key];
          cleaned++;
        }
      });

      if (cleaned > 0) {
        localStorage.setItem('sentReminders', JSON.stringify(sentReminders));
        console.log(`Cleaned up ${cleaned} old reminder records`);
      }
    } catch (error) {
      console.error('Error cleaning up old reminders:', error);
    }
  }

  /**
   * Format date for display
   * @param {Date} date - Date to format
   * @returns {string} - Formatted date string
   */
  formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Get upcoming reminders for display
   * @param {number} daysAhead - Number of days to look ahead (default 30)
   * @returns {Array} - Array of upcoming reminder objects
   */
  getUpcomingReminders(daysAhead = 30) {
    try {
      const history = JSON.parse(localStorage.getItem('loanHistory') || '[]');
      const upcomingReminders = [];

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const futureDate = new Date(today);
      futureDate.setDate(futureDate.getDate() + daysAhead);

      for (const loan of history) {
        if (!loan.enableReminders || !loan.telegramUsername) {
          continue;
        }

        const schedule = loan.amortizationSchedule || [];
        for (let i = 0; i < schedule.length; i++) {
          const payment = schedule[i];
          const paymentDate = new Date(payment.date);
          paymentDate.setHours(0, 0, 0, 0);

          if (paymentDate >= today && paymentDate <= futureDate) {
            const daysUntil = Math.ceil((paymentDate - today) / (1000 * 60 * 60 * 24));

            upcomingReminders.push({
              loanId: loan.id,
              customerName: loan.customerName,
              issuerName: loan.issuerName,
              paymentNumber: i + 1,
              totalPayments: schedule.length,
              paymentAmount: payment.payment,
              paymentDate: paymentDate,
              daysUntil: daysUntil,
              reminderDaysBefore: loan.reminderDaysBefore,
              telegramUsername: loan.telegramUsername
            });
          }
        }
      }

      // Sort by payment date
      upcomingReminders.sort((a, b) => a.paymentDate - b.paymentDate);

      return upcomingReminders;
    } catch (error) {
      console.error('Error getting upcoming reminders:', error);
      return [];
    }
  }
}

// Export for use in Node.js environment (Electron)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReminderScheduler;
}
