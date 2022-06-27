'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, 很高兴遇见你';
  }
}

module.exports = HomeController;
