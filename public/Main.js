const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 635,
    height: 600,
    title: "Later Birdy",
    resizable: false,
    maximizable: false,
    fullscreenable: false
  });

  win.loadURL('http://localhost:3000');
  // win.loadURL(`file://${path.join(__dirname, './index.html')}`);

  win.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    shell.openExternal(url);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});