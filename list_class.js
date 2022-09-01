function list_all_class() {
    // 枚举所有的类
    send("------------枚举所有的类开始------------")
    Java.perform(function () {
        Java.enumerateLoadedClasses({
            onMatch: function (name, handle){
                send("name:" + name + "\thandle:" + handle)
            },
            onComplete: function () {
                //
            }
        })
    })
    send("------------枚举所有的类结束------------")
}