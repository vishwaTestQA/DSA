const [a, ...b] = [1, 2, 3];
console.log(a, b);    //1, [2,3]


const obj = { a: 1, b: 2 };
const clone = { ...obj, b: 5 };
console.log(clone);              //{ a: 1, b: 5 }   copy obj value and overides b in it
console.log(obj);              //{ a: 1, b: 5 }