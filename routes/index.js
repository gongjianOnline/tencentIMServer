const router = require('koa-router')()
var TLSSigAPIv2 = require('tls-sig-api-v2');

//  get方式
// /**
//  * @swagger
//  * /login:
//  *   get:
//  *     tags:
//  *       - IM登录
//  *     summary: IM登录获取sign
//  *     parameters:
//  *       - name: name
//  *         in: query
//  *         required: true
//  *         description: 用户名
//  *         type: string
//  *     responses:
//  *      200: 
//  *        description: 成功获取
//  */

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - IM登录
 *     summary: 用户登录
 *     description: 用户通过用户名和密码进行登录
 *     parameters:
 *       - in: body
 *         name: data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *      200: 
 *        description: 成功获取
 */
router.post("/login",async (ctx,next)=>{
  var {name} = ctx.request.body;
  console.log(name);
  if(!name){
    ctx.body = {
      code:102,
      data:{
        sig:null
      },
      message:"用户名不能为空"
    }
    return
  }
  var api = new TLSSigAPIv2.Api(1400813777, "5d447bbc2bea986a10e1bd1308bfb1aeaeed111dcf3211f7ca86d3368a5f3fc6 ");
  var sig = api.genSig(name, 86400*180);
  ctx.body = {
    code:101,
    data:{
      sig:sig
    },
    message:"success"
  }
})



module.exports = router
