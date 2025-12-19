// Telegram Bot API Integration Module

class TelegramBot {
  constructor(botToken) {
    this.botToken = botToken;
    this.baseUrl = `https://api.telegram.org/bot${botToken}`;
  }

  /**
   * Validate bot token by calling getMe API
   * @returns {Promise<{valid: boolean, botInfo?: object, error?: string}>}
   */
  async validateToken() {
    try {
      const response = await fetch(`${this.baseUrl}/getMe`);
      const data = await response.json();

      if (data.ok) {
        return {
          valid: true,
          botInfo: data.result
        };
      } else {
        return {
          valid: false,
          error: data.description || 'Invalid token'
        };
      }
    } catch (error) {
      return {
        valid: false,
        error: error.message
      };
    }
  }

  /**
   * Resolve Telegram username to chat ID
   * Note: This requires the user to have messaged the bot at least once
   * @param {string} username - Telegram username (with or without @)
   * @returns {Promise<{success: boolean, chatId?: number, error?: string}>}
   */
  async getUserChatId(username) {
    try {
      // Remove @ if present
      const cleanUsername = username.replace('@', '');

      // Get updates to find the user
      const response = await fetch(`${this.baseUrl}/getUpdates`);
      const data = await response.json();

      if (!data.ok) {
        return {
          success: false,
          error: 'Failed to get updates from bot'
        };
      }

      // Search for user in recent messages
      const updates = data.result;
      for (const update of updates) {
        const message = update.message || update.edited_message;
        if (message && message.from) {
          if (message.from.username && message.from.username.toLowerCase() === cleanUsername.toLowerCase()) {
            return {
              success: true,
              chatId: message.from.id
            };
          }
        }
      }

      return {
        success: false,
        error: `User @${cleanUsername} not found. The user must message the bot first.`
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Send a text message to a chat
   * @param {number} chatId - Telegram chat ID
   * @param {string} message - Message text
   * @param {object} options - Additional options (parse_mode, etc.)
   * @returns {Promise<{success: boolean, messageId?: number, error?: string}>}
   */
  async sendMessage(chatId, message, options = {}) {
    try {
      const payload = {
        chat_id: chatId,
        text: message,
        parse_mode: options.parse_mode || 'HTML',
        ...options
      };

      const response = await fetch(`${this.baseUrl}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.ok) {
        return {
          success: true,
          messageId: data.result.message_id
        };
      } else {
        return {
          success: false,
          error: data.description || 'Failed to send message'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Send a payment reminder message
   * @param {number} chatId - Telegram chat ID
   * @param {object} reminderData - Reminder information
   * @param {string} language - Language preference ('km' or 'en')
   * @returns {Promise<{success: boolean, messageId?: number, error?: string}>}
   */
  async sendPaymentReminder(chatId, reminderData, language = 'en') {
    const {
      customerName,
      issuerName,
      paymentAmount,
      paymentDate,
      paymentNumber,
      totalPayments,
      daysUntil
    } = reminderData;

    // Format message based on language
    let message;
    if (language === 'km') {
      message = `
🔔 <b>ការជូនដំណឹងការទូទាត់ប្រាក់កម្ចី</b>

សូមគោរព ${customerName},

នេះគឺជាការរំលឹកអំពីការទូទាត់ប្រាក់កម្ចីរបស់អ្នក។

💵 <b>ចំនួនទឹកប្រាក់:</b> $${paymentAmount}
📅 <b>កាលបរិច្ឆេទផុតកំណត់:</b> ${paymentDate}
📊 <b>ការទូទាត់:</b> ${paymentNumber} ក្នុងចំណោម ${totalPayments}
${daysUntil > 0 ? `⏰ <b>នៅសល់:</b> ${daysUntil} ថ្ងៃទៀត` : '⏰ <b>ត្រូវបង់ថ្ងៃនេះ!</b>'}

សូមអរគុណ!
${issuerName}
      `.trim();
    } else {
      message = `
🔔 <b>Loan Payment Reminder</b>

Dear ${customerName},

This is a reminder for your loan payment.

💵 <b>Payment Amount:</b> $${paymentAmount}
📅 <b>Due Date:</b> ${paymentDate}
📊 <b>Payment:</b> ${paymentNumber} of ${totalPayments}
${daysUntil > 0 ? `⏰ <b>Due in:</b> ${daysUntil} days` : '⏰ <b>Payment due today!</b>'}

Thank you!
${issuerName}
      `.trim();
    }

    return this.sendMessage(chatId, message);
  }

  /**
   * Send a test message
   * @param {number} chatId - Telegram chat ID
   * @param {string} language - Language preference
   * @returns {Promise<{success: boolean, messageId?: number, error?: string}>}
   */
  async sendTestMessage(chatId, language = 'en') {
    const message = language === 'km'
      ? '✅ ការតភ្ជាប់ជោគជ័យ! Bot របស់អ្នកដំណើរការបានល្អ។'
      : '✅ Connection successful! Your bot is working properly.';

    return this.sendMessage(chatId, message);
  }
}

// Export for use in Node.js environment (Electron)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TelegramBot;
}
