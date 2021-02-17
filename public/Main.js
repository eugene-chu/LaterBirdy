const { app, BrowserWindow, shell } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 635,
    height: 600,
    title: "Later Birdy"
  });

  win.loadURL('http://localhost:3000');

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