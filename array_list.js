var arrayList = Java.use("java.util.ArrayList");
arrayList.add.overload('java.lang.Object').implementation = function (a) {
    console.log("ArrayList.add: ", a);
    return this.add(a);
}
arrayList.add.overload('int', 'java.lang.Object').implementation = function (a, b) {
    console.log("ArrayList.add: ", a, b);
    return this.add(a, b);
}

var arrayList = Java.use("java.util.ArrayList");
arrayList.add.overload('java.lang.Object').implementation = function (a) {
    if(a.equals("username=13866668888")){
        showStacks();
        console.log("ArrayList.add: ", a);
    }
    return this.add(a);
}