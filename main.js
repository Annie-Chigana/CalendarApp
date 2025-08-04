const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    alwaysOnTop: false,
    resizable: true,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window', () => {
  if (process.platform !== 'darwin') app.quit();
});
