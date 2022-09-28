Java.perform(function(){
    var stringBuilder = Java.use("java.lang.StringBuilder");
    stringBuilder.toString.implementation = function () {
        var result = this.toString.apply(this, arguments);
        if(result == "username=13866668888"){
            showStacks();
            console.log("stringBuilder.toString is called!", result);
        }
        return result;
    }
});