function printStack(name) {
    Java.perform(function () {
        var Exception = Java.use("java.lang.Exception");
        var ins = Exception.$new("Exception");
        var straces = ins.getStackTrace();
        if (straces != undefined && straces != null) {
            var strace = straces.toString();
            var replaceStr = strace.replace(/,/g, "\n");
            send("=============================" + name + " Stack start=======================");
            send(replaceStr);
            send("=============================" + name + " Stack end=======================\r\n");
            Exception.$dispose();
        }
    });
  }
