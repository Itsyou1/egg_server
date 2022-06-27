'use strict'

const Controller = require('egg').Controller;

class template extends Controller {
  async index() {
    const data = await this.ctx.service.template.findAll(this.ctx);
    this.ctx.body = data;
  }
  async show() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await this.ctx.service.template.find(userId);
    ctx.body = user;
  }
  async more() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await this.ctx.service.template.query(userId);
    ctx.body = user;
  }
  async create() {
    const ctx = this.ctx;
    const params = ctx.request.body;
    const data = await ctx.service.template.create(params);
    ctx.body = data;
  }
  async destroy() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const del = await ctx.service.template.delete(userId);
    ctx.body = del;
  }
  async update() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const params = ctx.request.body;
    const change = await ctx.service.template.update(userId, params);
    ctx.body = change;
  }
}
module.exports = template;