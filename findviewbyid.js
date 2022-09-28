Java.perform(function () {
    var btn_login_id = Java.use("com.dodonew.online.R$id").btn_login.value;
    console.log("btn_login_id", btn_login_id);
});

Java.perform(function () {
    var btn_login_id = Java.use("com.dodonew.online.R$id").btn_login.value;
console.log("btn_login_id", btn_login_id);
var appCompatActivity = Java.use("android.support.v7.app.AppCompatActivity");
appCompatActivity.findViewById.implementation = function (a) {
    if(a == btn_login_id){
        showStacks();
        console.log("appCompatActivity.findViewById: ", a);
    }
    return this.findViewById(a);
}
});