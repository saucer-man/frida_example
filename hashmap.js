var hashMap = Java.use("java.util.HashMap");
hashMap.put.implementation = function (a, b) {
console.log("HashMap.put: ", a, b);
return this.put(a, b);
}