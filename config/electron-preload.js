const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld('mainElectron', {
  ipcRenderer
})