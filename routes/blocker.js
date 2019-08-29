let  tokens = require('./token');
let Blocker = function (req,res,next) {
    //设置跨域
    // res.header("Access-Control-Allow-Credentials", true);
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Content-Type", "application/json;charset=utf-8");
    console.log(req.url);
    if (req.url != '/login') {
        //token可能存在post请求和get请求
        let token = req.body.token || req.query.token || req.headers.token;
        let result = tokens.decrypt(token);
        if (result.token) {
            next();
        } else {
            res.json({
                message: 'token过期，请重新登录',
                resultCode: 403
            })
            console.log('token过期，请重新登录')
        }
    }else {
        next();
    }
};
module.exports =Blocker;