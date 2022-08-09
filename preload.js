
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  filesApi: {
    readFile: async (filePath) => {
      return await ipcRenderer.invoke('readFile', filePath);
    },
    writeFile: async (filePath, content) => {
      return await ipcRenderer.send('writeFile', filePath, content);
    }
  }
})
