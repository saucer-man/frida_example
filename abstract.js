Java.perform(function () {
    var classes = Java.enumerateLoadedClassesSync();
    for (const index in classes) {
        var className = classes[index];
        if(className.indexOf("com.xiaojianbang") === -1) continue;
        var clazz = Java.use(className);
        var resultClass = clazz.class.getSuperclass();
        if(resultClass == null) continue;
        if(resultClass.toString().indexOf("com.xiaojianbang.app.TestAbstract") !== -1){
            console.log(className, resultClass);
        }
    }
});
// com.xiaojianbang.app.AbstractDemo class com.xiaojianbang.app.TestAbstract