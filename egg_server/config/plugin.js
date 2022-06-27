'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // 跨域设置
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  static: {
    prefix: "/public/",
    dir: ["app/public"],
  },
  jwt: {
    enable: true,
    package:'egg-jwt'
  }
};
