# 这里记录关于js报错的捕获方法

---

* try-catch捕获正常报错，（语法报错是无法try catch到的, 异步也不行)

* window.onerror (依旧对语法报错无解)

* Promise:

  <code>
  	window.addEventListener("unhandledrejection", function(e){
	  e.preventDefault()
	  console.log('我知道 promise 的错误了');
	  console.log(e.reason);
	  return true;
	});
	这个也是有chrome版本限制的
  </code>
* 
> Script error 是浏览器在同源策略限制下产生的，浏览器处于对安全性上的考虑，当页面引用非同域名外部脚本文件时中抛出异常的话，此时本页面是没有权利知道这个报错信息的，取而代之的是输出 Script error 这样的信息。

 应对方法： 1. script 上的crossOrigin 属性

 			这里加载第三方js，有时不带，是的callback啊，或者是其他报错无法查看，可以劫持
 			<code>
			document.createElement = (function() {
			  const fn = document.createElement.bind(document);
			  return function(type) {
			    const result = fn(type);
			    if(type === 'script') {
			      result.crossOrigin = 'anonymous';
			    }
			    return result;
			  }
			})();
			</code>