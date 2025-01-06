//datatype in javascript
//1. Number
var num1 = 34;
var num2 = 56.78;
console.log(num1 + num2);
//2. String
var str1 = "Hello";
var str2 = 'World';
console.log(str1 + str2);
//3. Boolean
var a = true;
var b = false;
//4. Null
var n = null;
//5. Undefined
var u = undefined;
//6. Object
var obj = {
    name: "Sanam",
    age: 20
};
console.log(obj);
//7. Array
var arr = [1, 2, 3, 4, 5];
console.log(arr);
//8. Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//9. Symbol
var sym = Symbol('foo');
console.log(sym);
//10. BigInt
var bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

//optional
//11. Date
var date = new Date();
console.log(date);
//12. RegExp
var reg = new RegExp('abc');
console.log(reg);
//13. Error
var err = new Error('This is an error');
console.log(err);