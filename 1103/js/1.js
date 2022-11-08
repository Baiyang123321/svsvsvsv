
function check(){

    var username = document.getElementById("ua");
    var password = document.getElementById("pd");
    var qpassword = document.getElementById("qpd");

    if (username.value==="" || password.value ==="" || qpassword.value ===""){
        alert("用户名或密码不能为空！");
        return false;
    }
    return true
}

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







