'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api/template', controller.template.index);   //获取数据
  router.get('/api/templatemore/:id', controller.template.more);// 查询多条

  // router.get('/api/template', controller.template.index);   //获取数据
  // router.get('/api/template/:id', controller.template.show);//根据id查找数据
  // router.post('/api/template', controller.template.create)  //添加数据
  // router.delete('/api/template/:id', controller.template.destroy);//删除数据
  // router.put('/api/template/:id', controller.template.update); //更新
  // router.get('/api/template/:name', controller.template.more);// 查询多条


};
