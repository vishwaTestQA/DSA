// 'use strict';
// // v = 3;
// // console.log(v);
// // var v;

// // y = 3;
// // console.log(y);
// // let y;

// for(var x = 1; x < 5; x++){
//     console.log(x);
// }

// console.log(x)

// let nul = null;
// let und = undefined;
// let und1;

// let div = "2"/"3"
// let div2 = "2"/3
// let div3 = 2/"3"
// console.log(div," ", div2, " ", div3);


// console.log(null/2);  // null is empty   ==> o/p : 0
// console.log(2/null);  // null is empty     ==> o/p : infinite

// console.log(undefined/2);
// console.log(2/undefined);

// console.log(undefined/null);
// console.log(null/undefined);

// console.log(0/"string")  //=> NAN


// //non number divided by a number(incl 0) or a num divided by a non number gives NAN

// console.log(1/false)
// console.log(false/1)
// console.log(false/0)  //=> NAN   becz 0/0 is NAN
// console.log(true/0)   //=> infinity  here 1/0 is infinity

// // let const var

let names = "vishwa";

names = "akchaya"

console.log(names)

// keywords
// ========

// browser LockManager======

// datatypes

let num = null;
let str = "tom"
let bool = true
console.log(typeof num)
console.log(typeof str)
console.log(typeof bool) 


let objec;


console.log(num)
console.log(objec)

//primitive 


// 

const items = [1,2,3,4,6];

console.log(items[0])

console.log(typeof items)
const someValue = "hi"

const obj = {
    someValue: "vishwa",
    age: 30,
    address:["madurai","chennai"],
    phoneNumber: [""],
    print: function(){
        console.log("from obj func: ",someValue);
        [1,2].forEach(v => console.log(this.someValue))
    }
}

obj.print.apply(obj)

const apples = "2";
const oranges="3";

console.log(apples + oranges)   //op "23"
console.log(+apples + +oranges)  //op 5

console.log(true)  // op true
console.log(+true)  // op 1
console.log(+false)  // op 0

console.log("==========")
console.log('"" + 1 + 0 :',"" + 1 + 0)
console.log('"" - 1 + 0 :',"" - 1 + 0)
console.log('true + false',true + false)  
console.log('6 / "3" :',6 / "3")  
console.log('"2" * "3":',"2" * "3")  
console.log('4 + 5 + "px" :',4 + 5 + "px")  
console.log('"$" + 4 + 5 :',"$" + 4 + 5)  
console.log('"4" - 2 :', "4" - 2)  
console.log('"4px" - 2 :', "4px" - 2)  
console.log('"  -9  " + 5 :', "  -9  " + 5)  
console.log('"  -9  " + 5 :', "-9" + 5)    //cohersion wont happen instead concatinate will happen 
console.log('"  -9  " - 5 :', "  -9  " - 5)  
console.log('null + 1 :', null + 1)  
console.log('undefined + 1 :', undefined + 1)  
console.log('" \t \n" - 2 :', " \t \n" - 2)  

let count = 0;
count++;
console.log(count)  // op 1

let count1 = 0
console.log(count++)  //op 1

// let count2 = 0
// count2++;
// alert(count)      //op 1

// let count2 = 0
// alert(count++)    //op 0     this is differebt from console.log 



console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
// Mathematically, that’s strange. The last result states that 
// “null is greater than or equal to zero”, 
// so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. 
// That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.


console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)