
const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const fs = require('fs');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notifiation', body: message}).show();
})
ipcMain.handle('readFile', async (_, filePath) => {
  return await fs.readFileSync(filePath, 'utf-8');
})

ipcMain.on('writeFile', async (_, filePath, content) => {
  await fs.writeFileSync(filePath, content, 'utf-8');
})

app.whenReady().then(createWindow)
