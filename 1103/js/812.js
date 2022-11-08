function Copy() {
    var content = document.getElementById('test');
    var content2 = document.getElementById("fill");
    var content3 = document.getElementById("texts");
    content.select();
    document.execCommand('Copy');
    content2.value = content.value;
    content3.innerHTML = "<p>复制成功！</p> "
}
