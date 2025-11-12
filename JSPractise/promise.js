// const delay = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
// });

// delay.then(console.log); 


// console.log("start");

// function a(){
//    console.log("a");
//    Promise.resolve(3).then(res => console.log("promise first", res))    //it go the stack
// //    console.log(res);
// }

// async function b(){
//     a()
//    setTimeout(() => {console.log("setTimeout 2nd")}, 1000)    //it will also go to the stack
//     console.log("b")
// }

// function c(){
//      b();
//     console.log("c")
// }

// // c();


// console.log("=========================");

// console.log("starttt");

// function aaa(){
//    console.log("aaaa");
//    setTimeout(() => {console.log("setTimeout 1st")}, 1000)    //it go the stack
// //    console.log(res);
// }

// async function bbb(){
//     aaa()
//     let ressss = setTimeout(() => 1*333, 1000)
    
//     Promise.resolve(ressss).then(res => console.log("promise 2nd",res))
//        //it will also go to the stack
//     console.log("bbb")
// }

// function ccc(){
//      bbb();
//     console.log("ccc")
// }

// c();
// ccc();


async function foo() {
  console.log(1);
  await console.log(2);
  console.log(3); 
}
foo();
console.log(4);     //1 2 3 4

// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => { throw new Error("oops") })    // no error thrown becz we caught the err
//   .catch(() => 1)
//   .then(x => x + 1)
//   .then(console.log);    // 2