var collections = Java.use("java.util.Collections");
collections.sort.overload('java.util.List').implementation = function (a) {
    showStacks();
    console.log("Collections.sort List: ", a.toString());
    return this.sort(a);
}
collections.sort.overload('java.util.List', 'java.util.Comparator').implementation = function (a, b) {
    showStacks();
    console.log("Collections.sort List Comparator: ", a.toString());
    return this.sort(a, b);
}

var collections = Java.use("java.util.Collections");
......
collections.sort.overload('java.util.List', 'java.util.Comparator').implementation = function (a, b) {
    showStacks();
    var result = Java.cast(a, Java.use("java.util.ArrayList"));
    console.log("Collections.sort List Comparator: ", result.toString());
    return this.sort(a, b);
}