let Test = (() => {
	var _ref = _asyncToGenerator(function* (argument) {
		try {
			bundle();
		} catch (err) {
			console.log(err, 'find error');
		}
	});

	return function Test(_x) {
		return _ref.apply(this, arguments);
	};
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

global.Test = true;
function bundle() {
	if (global.Test) {
		return new Promise((resolve, reject) => {
			throw 'error';
			setTimeout(() => {
				console.log('执行');
				bundle().then(resolve, reject);
			}, 1000);
		});
		global.Test = false;
	} else {
		console.log('测试结束');
	}
}

Test();
console.log('......cut line.......');