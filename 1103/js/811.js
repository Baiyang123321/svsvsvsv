// 判断用户名和密码是否为空
function check(){
    //获取用户名文本框
    var username = document.getElementById("ua");
    var password = document.getElementById("pd");
    var qpassword = document.getElementById("qpd");
    //验证用户名
    if (username.value==="" || password.value ==="" || qpassword.value ===""){
        alert("用户名或密码不能为空！");
        return false;
    }
    return true
}

// 判断密码是否符合要求
function validate(){
    var pd1 = document.getElementById("pd" ).value;
    var pd2 = document.getElementById("qpd" ).value;
    if (pd1.length < '6'){
        window.alert("密码长度不能小于六位数！");
        return false
    }
    if (pd1 !== pd2){
        window.alert("两次密码不一致，请重新输入！");
        return false
    }
    return true
}







