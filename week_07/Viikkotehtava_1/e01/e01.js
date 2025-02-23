var num = 42;
console.log(typeof(num));
// num is a number

var str = "Hello, world!";
console.log(typeof(str));
// str is a string

var bool = true;
console.log(typeof(bool));
// bool is a boolean

var nullVar = null;
console.log(typeof(nullVar));
// nullVar is an object

var undefinedVar = undefined;
console.log(typeof(undefinedVar));
// undefinedVar is undefined

var sym = Symbol('new');
console.log(typeof(sym));
// sym is a symbol

var obj = {
    key1: 'value1',
    key2: 'value2'
};
console.log(typeof(obj));
// obj is an object