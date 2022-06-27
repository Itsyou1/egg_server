'use strict'

var path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})
  // 图片上传
  config.uploadDir = 'app/public/upload'
  // add your middleware config here
  config.middleware = []
  config.uploadDir = 'app/public/upload'
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639723070889_7073'
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'campus',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: ['*'],
  }

  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH',
  }

  config.uploadDir = 'app/public/upload'

  // add your middleware config here
  config.middleware = []
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
