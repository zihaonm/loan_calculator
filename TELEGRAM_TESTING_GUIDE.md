# Telegram Reminder Testing Guide

## ✅ Step 1: App Started Successfully
The loan calculator app is now running! You should see a window with the calculator interface.

---

## 📱 Step 2: Create Your Telegram Bot

### On Telegram (Mobile or Desktop):

1. **Open Telegram** and search for **@BotFather**
   - Or click this link: https://t.me/BotFather

2. **Start a chat** with BotFather and send:
   ```
   /newbot
   ```

3. **Follow the prompts:**
   - **Bot name**: Enter a display name (e.g., "Loan Reminder Bot")
   - **Username**: Enter a unique username ending in "bot" (e.g., "your_name_loan_bot")

4. **Copy the Token**: BotFather will give you a token that looks like:
   ```
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz-1234567
   ```
   **⚠️ IMPORTANT: Keep this token secret!**

5. **CRITICAL STEP - Message your bot first:**
   - Click the link BotFather provides to your new bot
   - Press **"Start"** or send any message like "Hi"
   - This establishes the connection needed for reminders

---

## 🔧 Step 3: Configure the Bot in Your App

### In the Loan Calculator App:

1. **Scroll down** to the **"Telegram Bot Settings"** section (near the bottom)

2. **Paste your Bot Token** into the "Telegram Bot Token" field

3. **Click "Save Token"**
   - You should see: ✅ "Token saved! Bot: [Your Bot Name]"
   - If you see an error, double-check the token

4. **Click "Test Bot"**
   - Enter your Telegram username (e.g., `@your_username`)
   - Click OK
   - Check your Telegram - you should receive a test message! ✅

---

## 💰 Step 4: Create a Test Loan with Reminders

### Fill in the loan form:

1. **Customer Name**: Test Customer
2. **Issuer Name**: Test Bank
3. **Loan Amount**: 10000
4. **Interest Rate**: 5
5. **Loan Term**: 1 (one year for quick testing)
6. **Start Date**: Select today's date

### Configure Telegram Reminders:

7. **Telegram Username**: Enter YOUR Telegram username (e.g., `@your_username`)
8. **Days Before Payment**: Enter `0` (for immediate testing)
9. **Enable Reminders**: ✅ Keep checked

### Calculate and Save:

10. **Click "Calculate"** - You'll see the loan details and payment schedule
11. **Click "Download Report"** - This saves the loan to history
12. **Choose "Confirm & Download"** in the preview

---

## 🔍 Step 5: Verify Everything is Set Up

### Check Saved Data:

1. **Scroll down to "Saved History"** section
2. You should see your test loan listed
3. **Click "Load"** on the loan entry
4. Verify the Telegram username is shown

### View Upcoming Reminders:

1. **Scroll to "Telegram Bot Settings"**
2. **Click "View Upcoming Reminders"**
3. You should see upcoming payment reminders for the next 30 days

---

## 🧪 Step 6: Test Reminder Sending (Manual)

Since we set the reminder to 0 days (payment day only), we need to manually trigger a reminder check.

### Option A: Wait for Automatic Check (1 hour)
The scheduler checks every hour, so wait up to 1 hour.

### Option B: Force Check via Console (Faster):

1. **Open DevTools** in the app (should be open by default)
2. **Go to the Console tab**
3. **Type this command and press Enter:**
   ```javascript
   const scheduler = new ReminderScheduler();
   scheduler.checkReminders();
   ```

4. **Watch the console output** - you should see:
   - "Checking for payment reminders..."
   - "Sending reminder for loan..."
   - "Reminder sent successfully..."

5. **Check your Telegram** - you should receive a payment reminder! 🎉

---

## 📋 What the Reminder Looks Like

You should receive a message like:

```
🔔 Loan Payment Reminder

Dear Test Customer,

This is a reminder for your loan payment.

💵 Payment Amount: $856.07
📅 Due Date: Dec 19, 2025
📊 Payment: 1 of 12
⏰ Payment due today!

Thank you!
Test Bank
```

---

## ✅ Success Checklist

- [ ] Bot created with @BotFather
- [ ] Bot token saved in app (shows ✅ success message)
- [ ] Test message received on Telegram
- [ ] Test loan created with Telegram username
- [ ] Loan saved to history
- [ ] Upcoming reminders visible
- [ ] Payment reminder received on Telegram

---

## 🐛 Troubleshooting

### "Could not find user" error:
- **Solution**: Make sure you messaged your bot first! Click the bot link from BotFather and press "Start"

### "Invalid token" error:
- **Solution**: Copy the entire token from BotFather, including all characters

### No reminder received:
- **Solution**:
  1. Check console logs for errors
  2. Verify payment date is today
  3. Verify "Enable Reminders" is checked
  4. Try the manual console check method

### Username not found:
- **Solution**: Make sure you include the @ symbol (e.g., `@username`)

---

## 🎯 Next Steps

Once everything works:

1. **Test with a real scenario**:
   - Create a loan starting tomorrow
   - Set reminder to 1 day before
   - Wait until tomorrow to receive the reminder

2. **Test multiple customers**:
   - Create loans for different customers
   - Each needs their own Telegram username
   - Each customer must message your bot first

3. **View all upcoming reminders**:
   - Click "View Upcoming Reminders" to see the schedule

---

## 📞 Need Help?

If you encounter any issues, check:
1. Console logs in DevTools
2. Telegram username is correct
3. Customer messaged the bot first
4. Bot token is valid

Happy testing! 🚀
