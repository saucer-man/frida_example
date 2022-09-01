function list_func_from_class(targetClass) {
    send("------------枚举类方法开始("+targetClass+")------------")
    var target = Java.use(targetClass);
    var methods = hook.class.getDeclaredMethods();
    hook.$dispose;
    methods.forEach(function(method) {
        send(method);
    });
    send("------------枚举类方法结束("+targetClass+")------------")
}