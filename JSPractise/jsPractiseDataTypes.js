console.log(a);   //undefined    //will not throw error but here it prints undefined
var a = 10    

var a = 1;
function test() {
  console.log(a);     //now var value is printed as 1
//   var a = 2;
}
test();

var a = 1;
function test2() {
  console.log(a);     //undefined because noe this fn gives preference to its local variable
  var a = 2;
}
test2();


function foo() {
  console.log(a);    //10
}
var a = 10;
(function(){
  var a = 20;    //local scopped only availble for this fn 
  foo();
  console.log(a)   // now prints a
})();

// console.log(typeof a1);    //cannot access a1 before initialize
let a1 = 5;

function func1(){
   console.log(aa);
}
var aa = 11;
func1()

