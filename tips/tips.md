* Object.assign是披着深拷贝的外衣的浅拷贝
e.g
<code>
	var obj = {
		'leval1': {
			'leval2' : 1
		}
	}
	var test = Object.assign({}, obj)
	test.leval1.leval2 = 0;
	// obj.leaval1.leval2 == 0 true
</code>

* 多参数情况
<code>
function test ({arg1,arg2,arg3,arg4}) {
	console.log(arg1,arg2,arg3,arg4)
}
test({'arg1':123})
// 123 undefined undefined undefined
</code>

* concat的别用
<code>
	var arr1=[1,2,3,4,5],arr2=[6,7,8,9,10];
	arr1.push.apply(arr1,arr2);
	console.log(arr1)//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	// 我擦，这个利用了apply的第二个参数数组变对象啊
</code>