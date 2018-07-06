// 1.
const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};
var arr = []
var res = addItemToCart(arr, {'i':0});
console.log(res);

// 2.
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

const INITIAL_VALUE = 0;

const totalOutput = programmerOutput
  .reduce((acc, { linesOfCode }) => acc + linesOfCode, INITIAL_VALUE);
console.log(totalOutput);

//3. 链式结构
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    // NOTE: Returning this for chaining
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    // NOTE: Returning this for chaining
    return this;
  }
}

const car = new Car('Ford','F-150','red')
  .setColor('pink')
  .save();
// retrun this for chain


//4 引用丢失：
/*
	ps很简单，是因为ninja置空了
*/
var ninja = {
    chirp:function(n) {
      return n>1?ninja.chirp(n-1)+'-chirp':'chirp';
    }
}
var samurai = {chirp:ninja.chirp};
ninja = {};

try{
    console.log(samurai.chirp(3) === 'chirp-chirp-chirp')
}catch (err){
    if(err) alert(false);
}

// es6 useful api
var str='我就是守候'
str.startsWith('我就是')//true
str.startsWith('我')//true
str.startsWith('我',2)//false
str.startsWith('守候')//false
str.endsWith('守候')//true
str.includes('守候')//true
str.includes('我',3)//false

var str='守候'
str.padEnd(10,'123')//"守候12312312"
str.padStart(10,'123')//"12312312守候"
str.padEnd(10)//"守候        "
str.padStart(10)//"        守候"
str.padStart(1)//"守候"
str.padEnd(1)//"守候"

//in ES5
var obj = {
    x: 1,
    y: 2,
    z: 3
};

function trace1() {
    var cache = {};
    Object.keys(obj).forEach(function(key) {
        cache[key] = obj[key]; //避免循环 setter
        Object.defineProperty(obj, key, {
            get: function() {
                console.log('Get ', key);
                return cache[key];
            },
            set: function(vlu) {
                console.log('Set ', key, vlu);
                cache[key] = vlu;
            }
        })
    });
}
trace1();

obj.x = 5;
console.log(obj.z);
// Set  x 5
// Get  z
// 3//in ES6
var obj2 = {
    x: 6,
    y: 7,
    z: 8
};

function trace2() {
    return new Proxy(obj2, {
        get(target, key) {
            if (Reflect.has(target, key)) {
                console.log('Get ', key);
            }
            return Reflect.get(target, key);
        },
        set(target, key, vlu) {
            if (Reflect.has(target, key)) {
                console.log('Set ', key, vlu);
            }
            return Reflect.set(target, key, vlu);
        }
    });
}

const proxy2 = trace2();
proxy2.x = 99;
console.log(proxy2.z);
// Set  x 99
// Get  z
// 8

var obj = {
    x: 1,
    y: 2,
    say: function(word) {
        console.log("hello ", word)
    }
};

var proxy = new Proxy(obj, {
    get(target, key) {
        const targetValue = Reflect.get(target, key);
        if (typeof targetValue === 'function') {
            return function (...args) {
                console.log('CALL', key, args);
                return targetValue.apply(this, args);
            }
        } else {
            console.log('Get ', key);
            return targetValue;
        }
    }
});

proxy.x;
proxy.y;
proxy.say('excel!');
// Get  x
// Get  y
// CALL say [ 'excel!' ]
// hello  excel!

作者：江米小枣tonylua
链接：https://juejin.im/post/5a09361c6fb9a0451704b103
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。