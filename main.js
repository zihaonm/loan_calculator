const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  // Open DevTools in development (comment out for production)
  mainWindow.webContents.openDevTools();

  // Prevent window from being garbage collected
  mainWindow.on('close', (event) => {
    // On macOS, keep the app running even when window is closed
    // This allows the reminder scheduler to continue working
    if (process.platform === 'darwin') {
      event.preventDefault();
      mainWindow.hide();
    }
  });

  return mainWindow;
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS, re-show the window when the dock icon is clicked
    const windows = BrowserWindow.getAllWindows();
    if (windows.length === 0) {
      createWindow();
    } else {
      windows[0].show();
    }
  });
});

app.on('window-all-closed', () => {
  // On Windows and Linux, quit when all windows are closed
  // On macOS, keep the app running for background reminders
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
