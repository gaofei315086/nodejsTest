var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * @desc 登陆验证
 * @param
 * @return  status and out
 *
 * @author gf
 * @time 2018/4/27
 */
router.post('/login',function (req,res,next) {
    console.log(req.body);
    //不知道写什么逻辑好。写个简单的正则吧，名字含admin的用户，密码以gf开头，才能登陆成功
    if(/^[\w\W]*admin[\w\W]*$/.test(req.body.loginName) && /^gf[\w\W]*/.test(req.body.password)){
        return res.send({
            status:1,
            out:{
                msg:'登陆成功'
            }
        });
    }else{
        //根据不同的情况展现不同的错误提示
        var errMsg ="";
        if(!req.body.loginName){
            errMsg = "用户名不能为空！";
        }else if(!req.body.password){
            errMsg = "密码不能为空！";
        }else{
            errMsg = "用户名或密码错误";
        }
        return res.send({
            status:0,
            out:{
                msg:errMsg
            }
        });
    }

});

module.exports = router;
