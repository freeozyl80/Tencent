global.Test = true;
function bundle() {
	if (global.Test) {
		return new Promise((resolve, reject) => {
			throw 'error' //这里的报错能够被catch到
			setTimeout(() => {
				// 这里的报错直接throw吧
				console.log('执行');
				bundle().then(resolve, reject);
			}, 1000)
		});
		global.Test = false;
	} else {
		console.log('测试结束');
	}
}
async function Test(argument) {
	try {
		 bundle()
	} catch (err) {
		console.log(err,'find error');
	}
}
Test();
console.log('......cut line.......')