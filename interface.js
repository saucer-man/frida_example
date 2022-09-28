Java.perform(function () {
    var classes = Java.enumerateLoadedClassesSync();
    for (const index in classes) {
        var className = classes[index];
        if(className.indexOf("com.xiaojianbang") === -1) continue;
        var clazz = Java.use(className);
        var resultArr = clazz.class.getInterfaces();
        if(resultArr.length === 0) continue;
        for (let i = 0; i < resultArr.length; i++) {
            if(resultArr[i].toString().indexOf("com.xiaojianbang.app.TestRegisterClass") !== -1){
                console.log(className, resultArr);
            }
        }
    }
});
// com.xiaojianbang.app.InterfaceDemo interface com.xiaojianbang.app.TestRegisterClass