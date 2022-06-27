'use strict'

const Service = require('egg').Service;

class template extends Service {
  async findAll() {
    const result = await this.app.mysql.select('template');
    return {
      code: 200,
      msg: '查找成功',
      data: result
    };
  }
  async find(uid) {
    const result = await this.app.mysql.get('template', { id: uid });
    if (result !== null) {
      return {
        code: 200,
        msg: '查找成功',
        data: result
      };
    } else {
      return {
        msg: '没有此条数据！'
      }
    }

  }
  async create(params) {
    const cfg = {
      name: params.name,
    }
    const result = await this.app.mysql.insert('template', cfg);
    return {
      code: 200,
      msg: '创建成功',
      data: result
    };
  }
  async delete(uid) {
    const result = await this.app.mysql.delete('template', { id: uid });
    return {
      code: 200,
      msg: '删除成功',
      data: result
    };
  }
  async update(uid, params) {
    const cfg = {
      id: uid,
      number: params.number,
    }
    const result = await this.app.mysql.update('template', cfg)
    return {
      code: 200,
      msg: '更新成功',
      data: result
    }
  }
  // 查询多条
  async query(uid) {
    const result = await this.app.mysql.select('template', { where: { id: uid } });
    if (result !== null) {
      return {
        code: 200,
        msg: '查找成功',
        data: result
      };
    } else {
      return {
        msg: '没有此条数据！',
      }
    }
  }
}

module.exports = template;