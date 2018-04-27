/**
 * Created by hx on 2018/4/25.
 */
function login() {
    console.info("11111");
    console.info($("#loginName").val());
    $.ajax({
        type:'post',
        url:'/login',
        data:{
            loginName:$("#loginName").val(),
            password:$("#password").val()
        },
        dataType:'json',
        success:function (data) {
            console.info(data);
            window.location.href = "loginSucc.html";
        },
        error:function (data) {
            console.log(data);
        }
    })
}