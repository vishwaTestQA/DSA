
const obj = {
  name: "JS",
  greet() {
    console.log(this.name);
  }
};

obj.greet()     //JS
const greet = obj.greet;    //this keyword in this func now refers to global obj
greet();   //undefined
greet.call(obj)  // JS
const greetbind = greet.bind(obj); 
greetbind()  //JS

var num =10;   //val declared with let or const not belongs to global property in node.js
function sayHi() {
  console.log(this);    //refers global object in non-strict mode in node js
  console.log(num) ;    // 10
  console.log(this.num);    // undefined
}
sayHi.call(globalThis); // ?

const arrow = () => console.log(this);
arrow();

console.log(this)



function Person(name) {
  this.name = name;
}

// constructor function/
const p1 = new Person("Alice");
const p2 = Person("Bob");   // undefined since we didnt initialize with new keyword
console.log(p1, p2);  // Person { name: 'Alice' } undefined

function Person() {
  this.name;

  
}

const p3 = new Person();
console.log(p3)
p3.name = "vishwa"
console.log(p3.name)

class A {}
class B extends A {}
console.log(B.__proto__ === A);      // ?
console.log(B.prototype.__proto__ === A.prototype); // ?


const x = { a: 1 };
const y = { a: 1 };
console.log("x == y  -> ", x == y);   //false
console.log("JSON.stringify(x) === JSON.stringify(y) -> ", JSON.stringify(x) === JSON.stringify(y));  //true

const obj1 = { a: 1, b: 2 };
console.log(Object.keys(obj1));    //[ 'a', 'b' ]
console.log(Object.values(obj1));   //[ 1, 2 ]
console.log(Object.entries(obj1));  //[ [ 'a', 1 ], [ 'b', 2 ] ]