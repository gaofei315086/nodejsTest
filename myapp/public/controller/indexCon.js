/**
 * Created by hx on 2018/4/25.
 */
function login() {
    console.info("11111");
    console.info($("#loginName").val());
    $.ajax({
        type:'post',
        url:'/json/login',
        data:{
            loginName:$("#loginName").val(),
            password:$("#password").val()
        },
        dataType:'json',
        success:function (data) {
            console.info(data);

            if(data.status===1){
                window.location.href = "loginSucc";
            }else{
                // alert(data.out.msg);
                //展示错误信息，三秒后消失
                $(".errorMsg").text(data.out.msg).addClass("animated shake").css('-vendor-animation-duration','5s');
                setTimeout(function () {
                    //清空错误信息和样式
                    $(".errorMsg").text("").removeClass("animated shake");
                },2000)
            }
        },
        error:function (data) {
            console.log(data);
        }
    })
}