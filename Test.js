let str= "vishwa";
console.log(str.charAt(str.length-1))

console.log(str.slice(0, str.length-1));

const obj1=[1,2,3];

const obj2 = obj1;

console.log(obj1, obj2)

obj2.pop();

console.log(obj1, obj2)


function exec(){
    let object = {value: "ab", next:"bc"};
    let curr = object;
    let next = curr.next;    //bc
    object = next;   
    console.log(object, curr);
}



exec()


let current = {value:"1", next: {value:"2", next:{value:"3", next:null}}}
let prev = null;

let next = current.next;
prev = current;
prev.next = null;  
current = next;

console.log("next", next)
console.log("curr", current)
console.log("prev", prev)
console.log("curr", current)
console.log("next", next)
console.log("prev", prev)
console.log("curr", current)



let objA ={"a":1, inner:{"x":10,"y":20}}
// const objb = objA;



// objb.inner.x = 20;
// console.log(objA)

let pr;
let objNext = objA.inner;
pr = objA;
pr.inner = null;
objA = objNext;
objA.x = 2000;

console.log(objNext)
console.log(objA)



