const { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem, Notification, globalShortcut, webContents, ipcRenderer } = require('electron');
// const Api = require('common-log-api');

// const Log = require('rollup-test');
// const axios = require('axios');
const path = require('path');
const isMac = process.platform === 'darwin'; // 如果是MacOS
const isWin = process.platform === 'win32'; // 如果是Windows
const isDev = process.env.NODE_ENV === 'development';
const getRootPath = require('../../rootPath');
let windowIdMap = {};
// import Api from 'common-log-api';
const { GZipKafkaLog } = require('common-log-api');
// import {GZipKafkaLog} from 'common-log-api';

// const Api = require('common-log-api');
/**
 * @description 初始化创建窗口
 * @param name 窗口的名称
  */
function createWindow(name, option) {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      webviewTag: true,
      enableRemoteModule: true,
      preload: path.join(getRootPath(), 'static', 'electron-preload.js'),
    }
  });
  windowIdMap[name] = mainWindow.webContents.id; // 将窗口名称设置到map
  if (isDev) {
    mainWindow.loadURL('http://localhost:8000');
  } else {
    mainWindow.loadFile(path.join(getRootPath(), '/dist/index.html'));
  }
  mainWindow.webContents.openDevTools();
}
/**
 * @description 配置菜单,需要开启的话就将注释去掉，修改内容
*/
/* const menu = new Menu();
menu.append(new MenuItem({
  submenu: [{
    label: '退出',
    role: 'quit',
    accelerator: isMac ? 'Cmd+Q' : 'Alt+F4',
    click: () => { console.log('close app'); }
  }, {
    label: '老板键',
    role: 'hide',
    accelerator: isMac ? 'Cmd+H' : 'Win+D'
  }]
})); */
// Menu.setApplicationMenu(menu); 

/**
 * @description 弹一个通知
*/
function showNotification() {
  const NOTICE_TITLE = '成功初始化';
  const NOTICE_CONTENT = '恭喜初始化成功';
  new Notification({ title: NOTICE_TITLE, body: NOTICE_CONTENT }).show();
}


/**
 * @description 当是MacOS的时候
  */
// 切换暗黑模式
if (isMac) {
  ipcMain.handle('dark-mode:toggle', () => {
    nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
    return nativeTheme.shouldUseDarkColors;
  })
  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system';
  })
}

/**
 * @description 绑定主进程响应渲染进程的通信
  */
ipcMain.on('login', (e, opt) => {
  let { msg, callback } = opt;
  console.log(msg, callback, opt);
  callback?.();
})

ipcMain.handle('toMain', (callBack) => {
  callBack?.();
  return '我是main窗口，create window success'
})

/**
 * @description 当electron初始化完成的时候
*/
app.whenReady().then(async () => {
  globalShortcut.register('F12', () => {
    webContents.fromId(windowIdMap['default'])?.openDevTools();
  })
  createWindow('default');
}).then(async () => {
  isMac && showNotification();
  // console.log(Api);
  // console.log(CommonApi);
  /* const res = await Log({
    requestParams: {
      appSecuret: 'kDCcxy3BVAeNQP05',
      appKey: 'appstore',
      requestUrl: 'https://test-appstore-logs-collect.hubstudio.cn/',
    },
    formParams: {
      contentss: 'asdsssasds'
    }
  });

  console.log('config', res.config);
  console.log('data',res.data); */

  /*   const commonRes = await CommonLog({
      requestParams: {
        appSecuret: 'kDCcxy3BVAeNQP05',
        appKey: 'appstore',
        requestUrl: 'https://test-appstore-logs-collect.hubstudio.cn/'
      }, formParams: {
        contentss: 'asdsssasds'
      }
    });
    console.log('config', commonRes.config);
    console.log('res.data', commonRes.data); */
  /*  const kafkaRes = await KafkaLog({
     requestParams: {
       appSecuret: 'kDCcxy3BVAeNQP05',
       appKey: 'appstore',
       requestUrl: 'https://test-appstore-logs-collect.hubstudio.cn/'
     },
     formParams: {
       addHeader: '0',
       topic: 'ababsbad',
       contents: 'adasasd'
     }
   })
   console.log('config', kafkaRes.config);
   console.log('data',kafkaRes.data); */
  const gizpkafkaRes = await GZipKafkaLog({
    requestParams: {
      appSecuret: 'kDCcxy3BVAeNQP05',
      appKey: 'appstore',
      requestUrl: 'https://test-appstore-logs-collect.hubstudio.cn/'
    },
    formParams: {
      topic: 'ababsbad',
      content: 'asdaosisuoisuoaiusoiu'
    }
  });
  console.log('headers', gizpkafkaRes.config);
  console.log('data', gizpkafkaRes.data);
})
/**
 * @description 当没有窗口打开时，则打开一个新窗口（MacOS）
*/
app.on('activate', function () {
  if (!BrowserWindow.getAllWindows().length) createWindow();
});
/**
 * @description 当electron关闭所有窗口时，退出应用。
*/
app.on('mainWindow-all-closed', function () {
  if (isWin) app.quit();
})
