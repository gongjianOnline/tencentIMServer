const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = {
    code:101,
    data:{
      name:'张三'
    },
    message:'返回成功'
  }
})

module.exports = router
