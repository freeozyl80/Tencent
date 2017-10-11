Function.prototype.before = function (beforefn) {
  var _self = this;
  return function () {
    beforefn.apply(this, arguments);// 执行before函数
    return _self.apply(this, arguments);// 执行本函数
  }
}

Function.prototype.after = function (afterfn) {
  var _self = this;
  return function () {
    var ret = _self.apply(this, arguments);// 执行本函数
    afterfn.apply(this, arguments);// 执行before函数
    return ret;
  }
}

var func = function () {
  console.log('hahaha');
};

func = func.before(function(){
  console.log(1);
}).after(function(){
  console.log(2);
})
func();