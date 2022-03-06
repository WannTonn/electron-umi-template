/**
 * @description 
 * electron-builder配置文件， 使用时通过npmscript 指定--config 来匹配运行
 * eg(当前)： elctron-builder --config .config/electron-build-config.js
  */

 module.exports = {
  productName: 'EnjoyMusic',
  // 注入打包后package.json 内的属性
  extraMetadata: {
    main: '../main.js'
  },
  directories: {
    output: 'release' // 编译文件输出文件夹
  },
  // mac打包配置
  mac: {
    // 包类型，参见 https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8
    category: 'public.app-category.developer-tools',
    target: 'default', // 目标包类型，
  },
  files: ['main.js', 'dist/', 'main/', 'node_modules/', 'package.json'], // 需要打包的文件
  dmg: {
    // background: 'build/appdmg.png', // dmg安装窗口背景图
    icon: 'public/icon.icns', // 客户端图标
    iconSize: 100, // 安装图标大小
    // 安装窗口中包含的项目和配置
    contents: [
      { x: 380, y: 280, type: 'link', path: '/Applications' },
      { x: 110, y: 280, type: 'file' },
    ],
    window: { width: 500, height: 500 }, // 安装窗口大小
  },
  linux: {
    target: ['AppImage', 'deb'],
    icon: 'build/icon.png',
  },
  win: {
    target: ['nsis', 'portable', 'squirrel'],
    icon: 'public/icon.ico', // 客户端图标
  },
  nsis: {
    oneClick: false, // 是否一键安装
    allowElevation: true,// 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
    allowToChangeInstallationDirectory: true, // 允许修改安装目录
    // installerIcon: "./build/icon.ico",// 安装图标
    // uninstallerIcon: "./build/icons/bbb.ico",//卸载图标
    // installerHeaderIcon: "./build/icon.ico", // 安装时头部图标
    createDesktopShortcut: true, // 创建桌面图标
    createStartMenuShortcut: true,// 创建开始菜单图标
    shortcutName: 'EnjoyMusic', // 图标名称
  },
  // asar: {
  //   smartUnpack: true,  // asar打包, 智能提取第三方模块
  // },
  /* asar: false,
  publish: [
    {
      provider: 'generic',
      url: 'http://localhost/release/',//更新服务器地址,请按实际部署修改
    },
  ], */
}