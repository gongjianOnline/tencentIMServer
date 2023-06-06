const router = require('koa-router')()
var TLSSigAPIv2 = require('tls-sig-api-v2');

// 调用后台的login接口获取腾讯的 sign 秘钥
router.post("/login",async (ctx,next)=>{
  var {name} = ctx.request.body;
  console.log(name);
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
