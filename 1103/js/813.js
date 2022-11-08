function check(){

    var username = document.getElementById("ua");
    var password = document.getElementById("pd");;
    //验证用户名
    if (username.value==="" || password.value ===""){
        alert("用户名或密码不能为空！");
        return false;
    }
    return true
}