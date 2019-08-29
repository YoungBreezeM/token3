var express = require('express');
var router = express.Router();
let  tokens = require('./token');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/',function (req,res,next) {
  let token = req.body.token || req.query.token || req.headers.token;
  let result = tokens.decrypt(token);
  if(result.token){
    console.log(result.data);
    let{userName,password} =result.data;
    res.json({
      message: '已经登录',
      resultCode:1,
      token:tokens.encrypt({userName,password},60)
    })
  }else {
    res.json({
      message: 'token过期，请重新登录',
      resultCode: 403
    })
    console.log('token过期，请重新登录')
  }
})

module.exports = router;
