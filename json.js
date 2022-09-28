var jSONObject = Java.use("org.json.JSONObject");
jSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function (a, b) {
    showStacks();
    console.log("JSONObject.put: ", a, b);
    return this.put(a, b);
}
jSONObject.getString.implementation = function (a) {
    showStacks();
    var result = this.getString(a);
    console.log("JSONObject.getString: ", a, result);
    return result;
}