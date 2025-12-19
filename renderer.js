// Translation system
const translations = {
  km: {
    title: 'កម្មវិធីគណនាប្រាក់កម្ចី',
    customerName: 'ឈ្មោះអតិថិជន',
    customerNamePlaceholder: 'បញ្ចូលឈ្មោះអតិថិជន',
    issuerName: 'ឈ្មោះអ្នកផ្តល់កម្ចី',
    issuerNamePlaceholder: 'បញ្ចូលឈ្មោះអ្នកផ្តល់កម្ចី',
    loanAmount: 'ចំនួនទឹកប្រាក់កម្ចី ($)',
    loanAmountPlaceholder: 'ឧទា. 200000',
    interestRate: 'អត្រាការប្រាក់ប្រចាំឆ្នាំ (%)',
    interestRatePlaceholder: 'ឧទា. 5.5',
    loanTerm: 'រយៈពេលប្រាក់កម្ចី (ឆ្នាំ)',
    loanTermPlaceholder: 'ឧទា. 30',
    startDate: 'កាលបរិច្ឆេទចាប់ផ្តើម',
    issueDate: 'កាលបរិច្ឆេទចេញឯកសារ',
    telegramReminders: 'ការរំលឹកតាម Telegram',
    telegramUsername: 'Telegram Username អតិថិជន',
    telegramUsernamePlaceholder: '@username',
    reminderDaysBefore: 'ផ្ញើការរំលឹកមុនកាលកំណត់',
    reminderDaysBeforePlaceholder: 'ចំនួនថ្ងៃ',
    reminderDaysHint: 'ចំនួនថ្ងៃមុនកាលកំណត់ (0 = ថ្ងៃចំណាយប៉ុណ្ណោះ)',
    enableReminders: 'បើកការរំលឹកស្វ័យប្រវត្តិ',
    calculate: 'គណនា',
    clear: 'សម្អាត',
    results: 'លទ្ធផល',
    downloadReport: 'ទាញយករបាយការណ៍',
    customer: 'អតិថិជន:',
    issuer: 'អ្នកផ្តល់កម្ចី:',
    startDateLabel: 'កាលបរិច្ឆេទចាប់ផ្តើម:',
    finalPaymentDate: 'កាលបរិច្ឆេទបង់ចុងក្រោយ:',
    monthlyPayment: 'ការទូទាត់ប្រចាំខែ:',
    totalPayment: 'ការទូទាត់សរុប:',
    totalInterest: 'ការប្រាក់សរុប:',
    amortizationSchedule: 'តារាងសងប្រាក់',
    orderNumber: '#',
    date: 'កាលបរិច្ឆេទ',
    payment: 'ការទូទាត់',
    principal: 'ប្រាក់ដើម',
    interest: 'ការប្រាក់',
    balance: 'សមតុល្យ',
    savedHistory: 'ប្រវត្តិដែលបានរក្សាទុក',
    clearAllHistory: 'លុបប្រវត្តិទាំងអស់',
    noSavedCalculations: 'មិនទាន់មានការគណនាដែលបានរក្សាទុកនៅឡើយទេ។ ទាញយករបាយការណ៍ ដើម្បីរក្សាទុកវាទៅក្នុងប្រវត្តិ។',
    alertFillAllFields: 'សូមបំពេញគ្រប់វាលទាំងអស់',
    alertValidNumbers: 'សូមបញ្ចូលលេខវិជ្ជមានត្រឹមត្រូវ',
    confirmClearHistory: 'តើអ្នកប្រាកដថាចង់លុបប្រវត្តិទាំងអស់? វាមិនអាចត្រឡប់វិញបានទេ។',
    confirmDeleteEntry: 'តើអ្នកប្រាកដថាចង់លុបការគណនានេះពីប្រវត្តិ?',
    historyLoad: 'ផ្ទុក',
    historyDownload: 'ទាញយក',
    historyDelete: 'លុប',
    historyAmount: 'ចំនួន:',
    historyRate: 'អត្រា:',
    historyTerm: 'រយៈពេល:',
    historyYears: 'ឆ្នាំ',
    telegramSettings: 'ការកំណត់ Telegram Bot',
    telegramSettingsInfo: 'ដើម្បីប្រើការរំលឹកតាម Telegram អ្នកត្រូវបង្កើត Telegram Bot និងបញ្ចូល Bot Token។ សូមទៅកាន់ @BotFather លើ Telegram ដើម្បីបង្កើត Bot ថ្មី។',
    createBot: 'បង្កើត Bot ជាមួយ @BotFather',
    botToken: 'Telegram Bot Token',
    botTokenPlaceholder: '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz',
    saveBotToken: 'រក្សាទុក Token',
    testBot: 'សាកល្បង Bot',
    viewReminders: 'មើលការរំលឹកខាងមុខ',
    upcomingReminders: 'ការរំលឹកខាងមុខ (30 ថ្ងៃ)',
    noUpcomingReminders: 'មិនមានការរំលឹកខាងមុខនៅឡើយទេ។',
    dueToday: 'ថ្ងៃនេះ',
    dueIn: 'នៅសល់',
    days: 'ថ្ងៃ',
    pdfTitle: 'កិច្ចព្រមព្រៀងប្រាក់កម្ចី',
    pdfSubtitle: 'កាលវិភាគការទូទាត់ និងលក្ខខណ្ឌ',
    pdfAgreementNo: 'លេខកិច្ចព្រមព្រៀង:',
    pdfDateIssued: 'កាលបរិច្ឆេទចេញ:',
    pdfLender: 'អ្នកផ្តល់កម្ចី',
    pdfBorrower: 'អ្នកខ្ចី',
    pdfLoanIssuer: 'អ្នកចេញប្រាក់កម្ចី',
    pdfLoanRecipient: 'អ្នកទទួលប្រាក់កម្ចី',
    pdfLoanDetails: 'ព័ត៌មានលម្អិតនៃប្រាក់កម្ចី',
    pdfPrincipalAmount: 'ចំនួនប្រាក់ដើម',
    pdfAnnualInterestRate: 'អត្រាការប្រាក់ប្រចាំឆ្នាំ',
    pdfLoanTerm: 'រយៈពេលប្រាក់កម្ចី',
    pdfStartDate: 'កាលបរិច្ឆេទចាប់ផ្តើម',
    pdfMaturityDate: 'កាលបរិច្ឆេទផុតកំណត់',
    pdfTotalPayments: 'ការទូទាត់សរុប',
    pdfMonthlyPayments: 'ការទូទាត់ប្រចាំខែ',
    pdfPaymentSummary: 'សង្ខេបការទូទាត់',
    pdfDescription: 'ការពិពណ៌នា',
    pdfAmount: 'ចំនួនទឹកប្រាក់',
    pdfMonthlyPayment: 'ការទូទាត់ប្រចាំខែ',
    pdfTotalInterest: 'ការប្រាក់សរុប',
    pdfTotalAmountPayable: 'ចំនួនសរុបត្រូវបង់',
    pdfAmortizationSchedule: 'តារាងសងប្រាក់',
    pdfPaymentDate: 'កាលបរិច្ឆេទទូទាត់',
    pdfPayment: 'ការទូទាត់',
    pdfPrincipal: 'ប្រាក់ដើម',
    pdfInterest: 'ការប្រាក់',
    pdfBalance: 'សមតុល្យ',
    pdfGeneratedOn: 'ឯកសារបានបង្កើតនៅ',
    pdfAgreementReference: 'លេខយោងកិច្ចព្រមព្រៀង:',
    years: 'ឆ្នាំ',
    months: 'ខែ',
    previewPDF: 'មើលមុន',
    adjustSettings: 'កែតម្រូវការកំណត់',
    downloadAsImage: 'ទាញយករូបភាព',
    confirmDownload: 'បញ្ជាក់ និងទាញយក',
    cancel: 'បោះបង់'
  },
  en: {
    title: 'Loan Calculator',
    customerName: 'Customer Name',
    customerNamePlaceholder: 'Enter customer name',
    issuerName: 'Issuer Name',
    issuerNamePlaceholder: 'Enter issuer name',
    loanAmount: 'Loan Amount ($)',
    loanAmountPlaceholder: 'e.g., 200000',
    interestRate: 'Annual Interest Rate (%)',
    interestRatePlaceholder: 'e.g., 5.5',
    loanTerm: 'Loan Term (years)',
    loanTermPlaceholder: 'e.g., 30',
    startDate: 'Start Date',
    issueDate: 'Issue Date',
    telegramReminders: 'Telegram Reminders',
    telegramUsername: 'Customer Telegram Username',
    telegramUsernamePlaceholder: '@username',
    reminderDaysBefore: 'Send reminder before payment',
    reminderDaysBeforePlaceholder: 'Number of days',
    reminderDaysHint: 'Number of days before payment (0 = payment day only)',
    enableReminders: 'Enable automatic reminders',
    calculate: 'Calculate',
    clear: 'Clear',
    results: 'Results',
    downloadReport: 'Download Report',
    customer: 'Customer:',
    issuer: 'Issuer:',
    startDateLabel: 'Start Date:',
    finalPaymentDate: 'Final Payment Date:',
    monthlyPayment: 'Monthly Payment:',
    totalPayment: 'Total Payment:',
    totalInterest: 'Total Interest:',
    amortizationSchedule: 'Amortization Schedule',
    orderNumber: '#',
    date: 'Date',
    payment: 'Payment',
    principal: 'Principal',
    interest: 'Interest',
    balance: 'Balance',
    savedHistory: 'Saved History',
    clearAllHistory: 'Clear All History',
    noSavedCalculations: 'No saved calculations yet. Download a report to save it to history.',
    alertFillAllFields: 'Please fill in all fields',
    alertValidNumbers: 'Please enter valid positive numbers',
    confirmClearHistory: 'Are you sure you want to clear all history? This cannot be undone.',
    confirmDeleteEntry: 'Are you sure you want to delete this calculation from history?',
    historyLoad: 'Load',
    historyDownload: 'Download',
    historyDelete: 'Delete',
    historyAmount: 'Amount:',
    historyRate: 'Rate:',
    historyTerm: 'Term:',
    historyYears: 'years',
    telegramSettings: 'Telegram Bot Settings',
    telegramSettingsInfo: 'To use Telegram reminders, you need to create a Telegram Bot and enter the Bot Token. Go to @BotFather on Telegram to create a new bot.',
    createBot: 'Create Bot with @BotFather',
    botToken: 'Telegram Bot Token',
    botTokenPlaceholder: '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz',
    saveBotToken: 'Save Token',
    testBot: 'Test Bot',
    viewReminders: 'View Upcoming Reminders',
    upcomingReminders: 'Upcoming Reminders (30 days)',
    noUpcomingReminders: 'No upcoming reminders.',
    dueToday: 'Due Today',
    dueIn: 'Due in',
    days: 'days',
    pdfTitle: 'LOAN AGREEMENT',
    pdfSubtitle: 'Payment Schedule & Terms',
    pdfAgreementNo: 'Agreement No:',
    pdfDateIssued: 'Date Issued:',
    pdfLender: 'LENDER',
    pdfBorrower: 'BORROWER',
    pdfLoanIssuer: 'Loan Issuer',
    pdfLoanRecipient: 'Loan Recipient',
    pdfLoanDetails: 'LOAN DETAILS',
    pdfPrincipalAmount: 'Principal Amount',
    pdfAnnualInterestRate: 'Annual Interest Rate',
    pdfLoanTerm: 'Loan Term',
    pdfStartDate: 'Start Date',
    pdfMaturityDate: 'Maturity Date',
    pdfTotalPayments: 'Total Payments',
    pdfMonthlyPayments: 'monthly payments',
    pdfPaymentSummary: 'PAYMENT SUMMARY',
    pdfDescription: 'Description',
    pdfAmount: 'Amount',
    pdfMonthlyPayment: 'Monthly Payment',
    pdfTotalInterest: 'Total Interest',
    pdfTotalAmountPayable: 'TOTAL AMOUNT PAYABLE',
    pdfAmortizationSchedule: 'AMORTIZATION SCHEDULE',
    pdfPaymentDate: 'Payment Date',
    pdfPayment: 'Payment',
    pdfPrincipal: 'Principal',
    pdfInterest: 'Interest',
    pdfBalance: 'Balance',
    pdfGeneratedOn: 'Document generated on',
    pdfAgreementReference: 'Agreement Reference:',
    years: 'years',
    months: 'months',
    previewPDF: 'Preview',
    adjustSettings: 'Adjust Settings',
    downloadAsImage: 'Download as Image',
    confirmDownload: 'Confirm & Download',
    cancel: 'Cancel'
  }
};

let currentLang = 'km'; // Default language

document.addEventListener('DOMContentLoaded', () => {
  const calculateBtn = document.getElementById('calculateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const customerNameInput = document.getElementById('customerName');
  const issuerNameInput = document.getElementById('issuerName');
  const loanAmountInput = document.getElementById('loanAmount');
  const interestRateInput = document.getElementById('interestRate');
  const loanTermInput = document.getElementById('loanTerm');
  const startDateInput = document.getElementById('startDate');
  const issueDateInput = document.getElementById('issueDate');
  const langKmBtn = document.getElementById('langKm');
  const langEnBtn = document.getElementById('langEn');

  // Telegram elements
  const telegramUsernameInput = document.getElementById('telegramUsername');
  const reminderDaysBeforeInput = document.getElementById('reminderDaysBefore');
  const enableRemindersCheckbox = document.getElementById('enableReminders');

  // Telegram settings elements
  const botTokenInput = document.getElementById('botToken');
  const saveBotTokenBtn = document.getElementById('saveBotTokenBtn');
  const testBotBtn = document.getElementById('testBotBtn');
  const viewRemindersBtn = document.getElementById('viewRemindersBtn');
  const botStatus = document.getElementById('botStatus');

  // Reminders section elements
  const remindersSection = document.getElementById('remindersSection');
  const closeRemindersBtn = document.getElementById('closeRemindersBtn');

  // Store calculation data for download
  let calculationData = null;
  let currentLoanId = null; // Track current loan ID for history updates

  // Initialize scheduler
  const scheduler = new ReminderScheduler();

  // Load saved language preference
  currentLang = localStorage.getItem('language') || 'km';

  // Load saved bot token
  const savedBotToken = localStorage.getItem('telegramBotToken');
  if (savedBotToken) {
    botTokenInput.value = savedBotToken;
  }

  calculateBtn.addEventListener('click', calculateLoan);
  clearBtn.addEventListener('click', clearForm);
  downloadBtn.addEventListener('click', downloadReport);
  langKmBtn.addEventListener('click', () => switchLanguage('km'));
  langEnBtn.addEventListener('click', () => switchLanguage('en'));

  // Telegram event listeners
  saveBotTokenBtn.addEventListener('click', saveBotToken);
  testBotBtn.addEventListener('click', testBot);
  viewRemindersBtn.addEventListener('click', viewUpcomingReminders);
  closeRemindersBtn.addEventListener('click', () => {
    remindersSection.style.display = 'none';
  });

  // Reset loan ID when user manually changes form inputs (creates new loan instead of updating)
  [customerNameInput, issuerNameInput, loanAmountInput, interestRateInput, loanTermInput, startDateInput].forEach(input => {
    input.addEventListener('input', () => {
      // Only reset if we're not currently loading from history
      if (currentLoanId && calculationData) {
        currentLoanId = null;
      }
    });
  });

  // Disable download button initially
  downloadBtn.disabled = true;

  // Set default start date and issue date to today
  const today = new Date();
  startDateInput.value = today.toISOString().split('T')[0];
  issueDateInput.value = today.toISOString().split('T')[0];

  // Initialize language
  switchLanguage(currentLang);

  // Allow Enter key to trigger calculation
  [customerNameInput, issuerNameInput, loanAmountInput, interestRateInput, loanTermInput, startDateInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        calculateLoan();
      }
    });
  });

  function t(key) {
    return translations[currentLang][key] || key;
  }

  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update language button states
    langKmBtn.classList.toggle('active', lang === 'km');
    langEnBtn.classList.toggle('active', lang === 'en');

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });

    // Refresh history to update button labels
    loadHistory();
  }

  function calculateLoan() {
    const customerName = customerNameInput.value.trim();
    const issuerName = issuerNameInput.value.trim();
    const loanAmount = parseFloat(loanAmountInput.value);
    const annualRate = parseFloat(interestRateInput.value);
    const loanTermYears = parseFloat(loanTermInput.value);
    const startDateValue = startDateInput.value;
    const issueDateValue = issueDateInput.value;

    // Validate inputs
    if (!customerName || !issuerName || !loanAmount || !annualRate || !loanTermYears || !startDateValue || !issueDateValue) {
      alert(t('alertFillAllFields'));
      return;
    }

    if (loanAmount <= 0 || annualRate < 0 || loanTermYears <= 0) {
      alert(t('alertValidNumbers'));
      return;
    }

    const startDate = new Date(startDateValue);
    const issueDate = new Date(issueDateValue);

    // Calculate monthly payment
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = Math.ceil(loanTermYears * 12);

    let monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / numberOfPayments;
    } else {
      monthlyPayment = loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    // Calculate end date (final payment date)
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + numberOfPayments - 1);

    // Display results
    document.getElementById('customerResult').textContent = customerName;
    document.getElementById('issuerResult').textContent = issuerName;
    document.getElementById('startDateResult').textContent =
      formatDate(startDate);
    document.getElementById('endDateResult').textContent =
      formatDate(endDate);
    document.getElementById('monthlyPayment').textContent =
      `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').textContent =
      `$${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').textContent =
      `$${totalInterest.toFixed(2)}`;

    // Generate amortization schedule and store data
    const amortizationSchedule = generateAmortizationSchedule(
      loanAmount,
      monthlyRate,
      monthlyPayment,
      numberOfPayments,
      startDate
    );

    // Store calculation data for download
    calculationData = {
      customerName,
      issuerName,
      loanAmount,
      annualRate,
      loanTermYears,
      startDate,
      issueDate,
      endDate,
      monthlyPayment,
      totalPayment,
      totalInterest,
      numberOfPayments,
      amortizationSchedule,
      // Telegram fields
      telegramUsername: telegramUsernameInput.value.trim(),
      reminderDaysBefore: parseInt(reminderDaysBeforeInput.value) || 0,
      enableReminders: enableRemindersCheckbox.checked,
      language: currentLang
    };

    // Enable download button
    downloadBtn.disabled = false;
  }

  function generateAmortizationSchedule(principal, monthlyRate, monthlyPayment, numberOfPayments, startDate) {
    const tbody = document.getElementById('amortizationBody');
    tbody.innerHTML = '';

    let balance = principal;
    const paymentDate = new Date(startDate);
    const schedule = [];
    let month = 1;

    // Regular payments
    for (month = 1; month <= numberOfPayments; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;

      // Prevent negative balance due to rounding
      if (balance < 0.01 && balance > -0.01) balance = 0;

      // Store schedule data
      schedule.push({
        date: new Date(paymentDate),
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: balance
      });

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${month}</td>
        <td>${formatDate(paymentDate)}</td>
        <td>$${monthlyPayment.toFixed(2)}</td>
        <td>$${principalPayment.toFixed(2)}</td>
        <td>$${interestPayment.toFixed(2)}</td>
        <td>$${balance.toFixed(2)}</td>
      `;
      tbody.appendChild(row);

      // Move to next month
      paymentDate.setMonth(paymentDate.getMonth() + 1);
    }

    // If there's a remaining balance, add final payment
    if (balance > 0.01) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = balance;
      const finalPayment = principalPayment + interestPayment;
      balance = 0;

      // Store schedule data
      schedule.push({
        date: new Date(paymentDate),
        payment: finalPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: 0
      });

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${month}</td>
        <td>${formatDate(paymentDate)}</td>
        <td>$${finalPayment.toFixed(2)}</td>
        <td>$${principalPayment.toFixed(2)}</td>
        <td>$${interestPayment.toFixed(2)}</td>
        <td>$0.00</td>
      `;
      tbody.appendChild(row);
    }

    return schedule;
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  function downloadReport() {
    if (!calculationData) return;

    // Show preview instead of directly downloading
    showPDFPreview(calculationData);
  }

  function generatePDF(data) {
    // Generate invoice number
    const invoiceNumber = `LOAN-${Date.now().toString().slice(-8)}`;

    // Create HTML content for PDF
    const pdfContent = document.createElement('div');
    pdfContent.style.cssText = 'font-family: "Khmer OS Siemreap", "Khmer OS", sans-serif; padding: 5px; background: white;';
    pdfContent.innerHTML = generatePDFContent(data);

    // Generate PDF using html2pdf with improved settings
    const opt = {
      margin: [8, 10, 8, 10], // top, right, bottom, left (in mm) - increased margins
      filename: `loan_agreement_${data.customerName.replace(/\s+/g, '_')}_${invoiceNumber}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true, // Better text rendering for Khmer
        logging: false
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true
      },
      pagebreak: {
        mode: ['css', 'legacy'],
        before: '.pdf-amortization-section'
      }
    };

    html2pdf().set(opt).from(pdfContent).save();
  }

  function downloadAsImage(data) {
    // Generate invoice number
    const invoiceNumber = `LOAN-${Date.now().toString().slice(-8)}`;

    // Create HTML content for image (without page breaks)
    const imageContent = document.createElement('div');
    imageContent.style.cssText = 'font-family: "Khmer OS Siemreap", "Khmer OS", sans-serif; padding: 20px; background: white; width: 794px; position: absolute; left: -9999px; top: 0;'; // A4 width in pixels at 96 DPI

    // Generate content without page break class for continuous image
    const htmlContent = generatePDFContent(data);
    // Remove page-break-before from amortization section for continuous image
    const continuousHtml = htmlContent.replace('class="pdf-amortization-section"', 'class="pdf-amortization-section-no-break"');
    imageContent.innerHTML = continuousHtml;

    // Temporarily add to body to render
    document.body.appendChild(imageContent);

    // Use html2canvas to convert to image
    html2canvas(imageContent, {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 834,
      windowHeight: imageContent.scrollHeight + 40
    }).then((canvas) => {
      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `loan_agreement_${data.customerName.replace(/\s+/g, '_')}_${invoiceNumber}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Remove temporary element
        document.body.removeChild(imageContent);
      }, 'image/png');
    }).catch((error) => {
      console.error('Error generating image:', error);
      if (document.body.contains(imageContent)) {
        document.body.removeChild(imageContent);
      }
      alert('Error generating image. Please try again.');
    });
  }


  function saveToHistory(data) {
    // Get existing history from localStorage
    let history = JSON.parse(localStorage.getItem('loanHistory') || '[]');

    // Create history entry
    const historyEntry = {
      id: currentLoanId || Date.now(), // Use existing ID if updating, otherwise create new
      timestamp: new Date().toISOString(),
      ...data,
      // Convert dates to ISO strings for storage
      startDate: data.startDate.toISOString(),
      issueDate: data.issueDate.toISOString(),
      endDate: data.endDate.toISOString(),
      amortizationSchedule: data.amortizationSchedule.map(entry => ({
        ...entry,
        date: entry.date.toISOString()
      }))
    };

    // If updating existing entry, remove the old one
    if (currentLoanId) {
      history = history.filter(e => e.id !== currentLoanId);
    }

    // Add to beginning of history
    history.unshift(historyEntry);

    // Limit history to 50 entries
    if (history.length > 50) {
      history = history.slice(0, 50);
    }

    // Save to localStorage
    localStorage.setItem('loanHistory', JSON.stringify(history));

    // Refresh history display
    loadHistory();
  }

  function loadHistory() {
    const history = JSON.parse(localStorage.getItem('loanHistory') || '[]');
    const historyList = document.getElementById('historyList');

    if (history.length === 0) {
      historyList.innerHTML = `<p class="history-empty">${t('noSavedCalculations')}</p>`;
      return;
    }

    historyList.innerHTML = '';

    history.forEach(entry => {
      const card = createHistoryCard(entry);
      historyList.appendChild(card);
    });
  }

  function createHistoryCard(entry) {
    const card = document.createElement('div');
    card.className = 'history-card';

    const timestamp = new Date(entry.timestamp);
    const formattedTimestamp = timestamp.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    card.innerHTML = `
      <div class="history-card-header">
        <div class="history-card-title">${entry.customerName}</div>
        <div class="history-card-date">${formattedTimestamp}</div>
      </div>
      <div class="history-card-info">
        <div class="history-info-row">
          <span class="history-info-label">${t('issuer')}</span>
          <span class="history-info-value">${entry.issuerName}</span>
        </div>
        <div class="history-info-row">
          <span class="history-info-label">${t('historyAmount')}</span>
          <span class="history-info-value">$${entry.loanAmount.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
        </div>
        <div class="history-info-row">
          <span class="history-info-label">${t('historyRate')}</span>
          <span class="history-info-value">${entry.annualRate}%</span>
        </div>
        <div class="history-info-row">
          <span class="history-info-label">${t('historyTerm')}</span>
          <span class="history-info-value">${entry.loanTermYears} ${t('historyYears')}</span>
        </div>
      </div>
      <div class="history-card-actions">
        <button class="btn-history-action btn-load" onclick="loadHistoryEntry(${entry.id})">${t('historyLoad')}</button>
        <button class="btn-history-action btn-redownload" onclick="redownloadHistoryEntry(${entry.id})">${t('historyDownload')}</button>
        <button class="btn-history-action btn-delete" onclick="deleteHistoryEntry(${entry.id})">${t('historyDelete')}</button>
      </div>
    `;

    return card;
  }

  // Make functions global so they can be called from onclick
  window.loadHistoryEntry = function(id) {
    const history = JSON.parse(localStorage.getItem('loanHistory') || '[]');
    const entry = history.find(e => e.id === id);

    if (!entry) return;

    // Store the loan ID to update this entry later
    currentLoanId = id;

    // Load data into form
    customerNameInput.value = entry.customerName;
    issuerNameInput.value = entry.issuerName;
    loanAmountInput.value = entry.loanAmount;
    interestRateInput.value = entry.annualRate;
    loanTermInput.value = entry.loanTermYears;
    startDateInput.value = new Date(entry.startDate).toISOString().split('T')[0];
    issueDateInput.value = entry.issueDate ? new Date(entry.issueDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

    // Load Telegram data
    telegramUsernameInput.value = entry.telegramUsername || '';
    reminderDaysBeforeInput.value = entry.reminderDaysBefore || 3;
    enableRemindersCheckbox.checked = entry.enableReminders !== false;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Optionally trigger calculation
    calculateLoan();
  };

  window.redownloadHistoryEntry = function(id) {
    const history = JSON.parse(localStorage.getItem('loanHistory') || '[]');
    const entry = history.find(e => e.id === id);

    if (!entry) return;

    // Convert dates back to Date objects
    const data = {
      ...entry,
      startDate: new Date(entry.startDate),
      issueDate: new Date(entry.issueDate || entry.timestamp), // fallback to timestamp for old entries
      endDate: new Date(entry.endDate),
      amortizationSchedule: entry.amortizationSchedule.map(item => ({
        ...item,
        date: new Date(item.date)
      }))
    };

    generatePDF(data);
  };

  window.deleteHistoryEntry = function(id) {
    if (!confirm(t('confirmDeleteEntry'))) {
      return;
    }

    let history = JSON.parse(localStorage.getItem('loanHistory') || '[]');
    history = history.filter(e => e.id !== id);
    localStorage.setItem('loanHistory', JSON.stringify(history));
    loadHistory();
  };

  function clearAllHistory() {
    if (!confirm(t('confirmClearHistory'))) {
      return;
    }

    localStorage.removeItem('loanHistory');
    loadHistory();
  }

  // Load history on page load
  loadHistory();

  // Add clear history button listener
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  clearHistoryBtn.addEventListener('click', clearAllHistory);

  // Telegram Bot Functions
  async function saveBotToken() {
    const token = botTokenInput.value.trim();

    if (!token) {
      showBotStatus('error', currentLang === 'km' ? 'សូមបញ្ចូល Bot Token' : 'Please enter a Bot Token');
      return;
    }

    showBotStatus('info', currentLang === 'km' ? 'កំពុងផ្ទៀងផ្ទាត់...' : 'Validating...');

    const bot = new TelegramBot(token);
    const result = await bot.validateToken();

    if (result.valid) {
      localStorage.setItem('telegramBotToken', token);
      showBotStatus('success',
        currentLang === 'km'
          ? `✅ បានរក្សាទុក! Bot: ${result.botInfo.first_name} (@${result.botInfo.username})`
          : `✅ Token saved! Bot: ${result.botInfo.first_name} (@${result.botInfo.username})`
      );
    } else {
      showBotStatus('error',
        currentLang === 'km'
          ? `❌ Token មិនត្រឹមត្រូវ: ${result.error}`
          : `❌ Invalid token: ${result.error}`
      );
    }
  }

  async function testBot() {
    const token = localStorage.getItem('telegramBotToken');

    if (!token) {
      showBotStatus('error', currentLang === 'km' ? 'សូមរក្សាទុក Bot Token ជាមុនសិន' : 'Please save a Bot Token first');
      return;
    }

    const username = prompt(
      currentLang === 'km'
        ? 'បញ្ចូល Telegram username របស់អ្នក (@username) ដើម្បីសាកល្បងផ្ញើសារ:'
        : 'Enter your Telegram username (@username) to test sending a message:',
      '@'
    );

    if (!username) return;

    showBotStatus('info', currentLang === 'km' ? 'កំពុងផ្ញើសារសាកល្បង...' : 'Sending test message...');

    const bot = new TelegramBot(token);

    // First, resolve username to chat ID
    const chatIdResult = await bot.getUserChatId(username);

    if (!chatIdResult.success) {
      showBotStatus('error',
        currentLang === 'km'
          ? `❌ មិនអាចស្វែងរកអ្នកប្រើប្រាស់: ${chatIdResult.error}`
          : `❌ Could not find user: ${chatIdResult.error}`
      );
      return;
    }

    // Send test message
    const sendResult = await bot.sendTestMessage(chatIdResult.chatId, currentLang);

    if (sendResult.success) {
      showBotStatus('success',
        currentLang === 'km'
          ? '✅ សារបានផ្ញើដោយជោគជ័យ! សូមពិនិត្យ Telegram របស់អ្នក។'
          : '✅ Message sent successfully! Check your Telegram.'
      );
    } else {
      showBotStatus('error',
        currentLang === 'km'
          ? `❌ មិនអាចផ្ញើសារ: ${sendResult.error}`
          : `❌ Could not send message: ${sendResult.error}`
      );
    }
  }

  function viewUpcomingReminders() {
    const reminders = scheduler.getUpcomingReminders(30);
    const remindersList = document.getElementById('remindersList');

    if (reminders.length === 0) {
      remindersList.innerHTML = `<p class="reminders-empty">${t('noUpcomingReminders')}</p>`;
    } else {
      remindersList.innerHTML = '';

      reminders.forEach(reminder => {
        const card = document.createElement('div');
        card.className = 'reminder-card';

        // Add urgency class
        if (reminder.daysUntil === 0) {
          card.classList.add('urgent');
        } else if (reminder.daysUntil <= 3) {
          card.classList.add('soon');
        }

        const daysText = reminder.daysUntil === 0
          ? t('dueToday')
          : `${t('dueIn')} ${reminder.daysUntil} ${t('days')}`;

        const urgencyClass = reminder.daysUntil === 0
          ? 'urgent'
          : reminder.daysUntil <= 3 ? 'soon' : 'normal';

        card.innerHTML = `
          <div class="reminder-header">
            <div class="reminder-customer">${reminder.customerName}</div>
            <span class="reminder-days ${urgencyClass}">${daysText}</span>
          </div>
          <div class="reminder-info">
            <div class="reminder-info-item">
              <span class="reminder-info-label">${t('payment')}:</span>
              <span class="reminder-info-value">#${reminder.paymentNumber}/${reminder.totalPayments}</span>
            </div>
            <div class="reminder-info-item">
              <span class="reminder-info-label">${t('historyAmount')}</span>
              <span class="reminder-info-value">$${reminder.paymentAmount.toFixed(2)}</span>
            </div>
            <div class="reminder-info-item">
              <span class="reminder-info-label">${t('date')}:</span>
              <span class="reminder-info-value">${formatDate(reminder.paymentDate)}</span>
            </div>
            <div class="reminder-info-item">
              <span class="reminder-info-label">Telegram:</span>
              <span class="reminder-info-value">${reminder.telegramUsername}</span>
            </div>
          </div>
        `;

        remindersList.appendChild(card);
      });
    }

    remindersSection.style.display = 'block';
    remindersSection.scrollIntoView({ behavior: 'smooth' });
  }

  function showBotStatus(type, message) {
    botStatus.className = `bot-status ${type}`;
    botStatus.textContent = message;

    // Auto-hide after 5 seconds
    setTimeout(() => {
      botStatus.className = 'bot-status';
    }, 5000);
  }

  function clearForm() {
    customerNameInput.value = '';
    issuerNameInput.value = '';
    loanAmountInput.value = '';
    interestRateInput.value = '';
    loanTermInput.value = '';
    telegramUsernameInput.value = '';
    reminderDaysBeforeInput.value = '3';
    enableRemindersCheckbox.checked = true;

    // Reset start date and issue date to today
    const today = new Date();
    startDateInput.value = today.toISOString().split('T')[0];
    issueDateInput.value = today.toISOString().split('T')[0];

    document.getElementById('customerResult').textContent = '-';
    document.getElementById('issuerResult').textContent = '-';
    document.getElementById('startDateResult').textContent = '-';
    document.getElementById('endDateResult').textContent = '-';
    document.getElementById('monthlyPayment').textContent = '$0.00';
    document.getElementById('totalPayment').textContent = '$0.00';
    document.getElementById('totalInterest').textContent = '$0.00';
    document.getElementById('amortizationBody').innerHTML = '';

    // Clear calculation data, loan ID, and disable download button
    calculationData = null;
    currentLoanId = null;
    downloadBtn.disabled = true;
  }

  // PDF Preview Modal Functions
  function showPDFPreview(data) {
    const modal = document.getElementById('pdfPreviewModal');
    const previewContent = document.getElementById('pdfPreviewContent');

    // Generate PDF content HTML
    const pdfHTML = generatePDFContent(data);
    previewContent.innerHTML = pdfHTML;

    // Show modal
    modal.classList.add('show');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  function closePDFPreview() {
    const modal = document.getElementById('pdfPreviewModal');
    modal.classList.remove('show');

    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  function generatePDFContent(data) {
    // Generate invoice number
    const invoiceNumber = `LOAN-${Date.now().toString().slice(-8)}`;
    const issueDateFormatted = data.issueDate.toLocaleDateString(currentLang === 'km' ? 'km-KH' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `
      <style>
        .pdf-container { font-family: 'Khmer OS Siemreap', 'Khmer OS', 'Hanuman', sans-serif; }
        .pdf-header { text-align: center; border-bottom: 2px solid #667eea; padding-bottom: 8px; margin-bottom: 10px; }
        .pdf-title { font-size: 22px; font-weight: bold; color: #667eea; margin: 5px 0; }
        .pdf-subtitle { font-size: 12px; color: #666; margin-bottom: 8px; }
        .pdf-info-box { border: 1px solid #ddd; padding: 6px 8px; margin-bottom: 10px; background: #f8f9fa; font-size: 11px; }
        .pdf-parties { display: flex; gap: 10px; margin-bottom: 12px; }
        .pdf-party { flex: 1; border: 1px solid #ddd; padding: 8px; background: #f8f9fa; }
        .pdf-party-title { font-weight: bold; color: #667eea; font-size: 11px; margin-bottom: 4px; }
        .pdf-party-name { font-size: 13px; font-weight: bold; margin-bottom: 3px; }
        .pdf-section-title { font-size: 14px; font-weight: bold; color: #667eea; margin: 12px 0 6px 0; border-bottom: 2px solid #667eea; padding-bottom: 3px; }
        .pdf-detail-table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 11px; }
        .pdf-detail-table td { padding: 5px 6px; border: 1px solid #ddd; }
        .pdf-detail-table td:first-child { background: #f8f9fa; font-weight: bold; width: 45%; }
        .pdf-summary-table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 11px; }
        .pdf-summary-table th { background: #667eea; color: white; padding: 6px 8px; text-align: left; }
        .pdf-summary-table th:first-child { width: 40%; }
        .pdf-summary-table td { padding: 5px 6px; border: 1px solid #ddd; }
        .pdf-summary-table td:first-child { width: 40%; }
        .pdf-summary-table .total-row { background: #28a745; color: white; font-weight: bold; }
        .page-break-before { page-break-before: always; }
        .pdf-amortization-section { page-break-before: always; }
        .pdf-amortization-table { width: 100%; border-collapse: collapse; font-size: 10px; page-break-inside: auto; table-layout: fixed; }
        .pdf-amortization-table th { background: #667eea; color: white; padding: 5px 4px; text-align: left; word-wrap: break-word; }
        .pdf-amortization-table td { padding: 5px 4px; border-bottom: 1px solid #ddd; word-wrap: break-word; overflow-wrap: break-word; }
        .pdf-amortization-table tbody tr { page-break-inside: avoid; page-break-after: auto; }
        .pdf-amortization-table tbody tr:nth-child(even) { background: #f8f9fa; }
        .pdf-amortization-table th:first-child, .pdf-amortization-table td:first-child { width: 8%; }
        .pdf-amortization-table th:nth-child(2), .pdf-amortization-table td:nth-child(2) { width: 20%; }
        .pdf-amortization-table th:nth-child(3), .pdf-amortization-table td:nth-child(3) { width: 18%; }
        .pdf-amortization-table th:nth-child(4), .pdf-amortization-table td:nth-child(4) { width: 18%; }
        .pdf-amortization-table th:nth-child(5), .pdf-amortization-table td:nth-child(5) { width: 18%; }
        .pdf-amortization-table th:last-child, .pdf-amortization-table td:last-child { width: 18%; }
        .pdf-footer { text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #667eea; color: #666; font-size: 9px; }
      </style>

      <div class="pdf-container">
        <div class="pdf-header">
          <div class="pdf-title">${t('pdfTitle')}</div>
          <div class="pdf-subtitle">${t('pdfSubtitle')}</div>
        </div>

        <div class="pdf-info-box">
          <div><strong>${t('pdfAgreementNo')}</strong> ${invoiceNumber}</div>
          <div><strong>${t('pdfDateIssued')}</strong> ${issueDateFormatted}</div>
        </div>

        <div class="pdf-parties">
          <div class="pdf-party">
            <div class="pdf-party-title">${t('pdfLender')}</div>
            <div class="pdf-party-name">${data.issuerName}</div>
            <div style="font-size: 11px; color: #666;">${t('pdfLoanIssuer')}</div>
          </div>
          <div class="pdf-party">
            <div class="pdf-party-title">${t('pdfBorrower')}</div>
            <div class="pdf-party-name">${data.customerName}</div>
            <div style="font-size: 11px; color: #666;">${t('pdfLoanRecipient')}</div>
          </div>
        </div>

        <div class="pdf-section-title">${t('pdfLoanDetails')}</div>
        <table class="pdf-detail-table">
          <tr>
            <td>${t('pdfPrincipalAmount')}</td>
            <td>$${data.loanAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
          </tr>
          <tr>
            <td>${t('pdfAnnualInterestRate')}</td>
            <td>${data.annualRate}%</td>
          </tr>
          <tr>
            <td>${t('pdfLoanTerm')}</td>
            <td>${data.loanTermYears} ${t('years')} (${data.numberOfPayments} ${t('months')})</td>
          </tr>
          <tr>
            <td>${t('pdfStartDate')}</td>
            <td>${formatDate(data.startDate)}</td>
          </tr>
          <tr>
            <td>${t('pdfMaturityDate')}</td>
            <td>${formatDate(data.endDate)}</td>
          </tr>
          <tr>
            <td>${t('pdfTotalPayments')}</td>
            <td>${data.numberOfPayments} ${t('pdfMonthlyPayments')}</td>
          </tr>
        </table>

        <div class="pdf-section-title">${t('pdfPaymentSummary')}</div>
        <table class="pdf-summary-table">
          <thead>
            <tr>
              <th>${t('pdfDescription')}</th>
              <th>${t('pdfAmount')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${t('pdfMonthlyPayment')}</td>
              <td>$${data.monthlyPayment.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            </tr>
            <tr>
              <td>${t('pdfTotalInterest')}</td>
              <td>$${data.totalInterest.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            </tr>
            <tr class="total-row">
              <td>${t('pdfTotalAmountPayable')}</td>
              <td>$${data.totalPayment.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            </tr>
          </tbody>
        </table>

        <div class="pdf-amortization-section">
          <div class="pdf-section-title">${t('pdfAmortizationSchedule')}</div>
          <table class="pdf-amortization-table">
            <thead>
              <tr>
                <th>#</th>
                <th>${t('pdfPaymentDate')}</th>
                <th>${t('pdfPayment')}</th>
                <th>${t('pdfPrincipal')}</th>
                <th>${t('pdfInterest')}</th>
                <th>${t('pdfBalance')}</th>
              </tr>
            </thead>
            <tbody>
              ${data.amortizationSchedule.map((entry, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td>${formatDate(entry.date)}</td>
                  <td>$${entry.payment.toFixed(2)}</td>
                  <td>$${entry.principal.toFixed(2)}</td>
                  <td>$${entry.interest.toFixed(2)}</td>
                  <td>$${entry.balance.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="pdf-footer">
          <div>${t('pdfGeneratedOn')} ${new Date().toLocaleString(currentLang === 'km' ? 'km-KH' : 'en-US')}</div>
          <div>${t('pdfAgreementReference')} ${invoiceNumber}</div>
        </div>
      </div>
    `;
  }

  // Modal event listeners
  const modal = document.getElementById('pdfPreviewModal');
  const modalClose = document.querySelector('.modal-close');
  const cancelPreviewBtn = document.getElementById('cancelPreviewBtn');
  const confirmDownloadBtn = document.getElementById('confirmDownloadBtn');
  const adjustPdfBtn = document.getElementById('adjustPdfBtn');
  const downloadImageBtn = document.getElementById('downloadImageBtn');

  modalClose.addEventListener('click', closePDFPreview);
  cancelPreviewBtn.addEventListener('click', closePDFPreview);

  adjustPdfBtn.addEventListener('click', () => {
    closePDFPreview();
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  downloadImageBtn.addEventListener('click', () => {
    if (!calculationData) return;

    // Close modal
    closePDFPreview();

    // Download as image
    downloadAsImage(calculationData);

    // Save to history
    saveToHistory(calculationData);
  });

  confirmDownloadBtn.addEventListener('click', () => {
    if (!calculationData) return;

    // Close modal
    closePDFPreview();

    // Generate and download PDF
    generatePDF(calculationData);

    // Save to history
    saveToHistory(calculationData);
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePDFPreview();
    }
  });
});
