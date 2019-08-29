var express = require('express');
var router = express.Router();
let token = require('./token');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.post('/', function(req, res, next) {
    let {userName,password} = req.body;
    // console.log(userName,password);
    if(userName=='yqf'&&password=='123456'){
        res.json({
            message: '登录成功',
            token:token.encrypt({userName,password},60),
            resultCode:1
        })
    }
});
module.exports = router;
