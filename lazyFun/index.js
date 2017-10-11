/*
我们现在需要写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。
*/
var foo = (function() {
    var t;
    return function() {
        if (t) return t;
        t = new Date();
        return t;
    }
})();

function foo() {
    if (foo.t) return foo.t;
    foo.t = new Date();
    return foo.t;
}

var foo = function() {
    var t = new Date();
    foo = function() {
        return t;
    };
    return foo();
};