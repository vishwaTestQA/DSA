// Closure definition (simple)
// A closure is when an inner function remembers variables from the scope 
// in which it was created — even after that scope has finished executing.

//var is function-scoped, not block-scoped**.
//That means there is only one shared i variable for the entire loop.
//below when every loop runs schedules a timeut function in eventLoop, now all the 
//schedules are waiting, by the time loop completes exec var would be 3, so all func uses same var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var",i), 1000);
}

//When you use let in a for loop, JavaScript creates a new binding (new memory) 
// for the variable i on every iteration.
//Each setTimeout callback forms a closure over its own lexical environment,
//which contains a unique copy of i.
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let ",i), 1000);
}

//loop runs 3 times we call arrowfunc imedietly-IIF and pass it i to the function as an argument
for (var i = 0; i < 3; i++) {
  ((j) => setTimeout(() => console.log("IIF arrow func ",j), 1000))(i);
}

//here the IIF not immediately invokes each itr a timeout function schedules 
// and it exectes later by the time the var is updated to 3, 
// since its shared all func uses same i
for (var i = 0; i < 3; i++) {
  setTimeout(() => 
      (function (a){
        console.log("IIF var ", a)
    })(i), 100);
}

//it wont run because setTimeout expects function reference as first arguement 
// and not IIF, here IIF immedietly invokes and gives val 0,1,2 immedietly to timeout func
//so after substituting the line becomes setTimeout(undefined, 100)
function tricky(){                      
for (var i = 0; i < 3; i++) {
  setTimeout(i, 100);
}
}

tricky()

for (var i = 0; i < 3; i++) {
  setTimeout(
    (function(i) {
      return function() {
        console.log("IIF var func reference", i);
      };
    })(i),
    100
  );
}

(function(i) {
        console.log("IIF var ", i)
})(i)


function makeAdder(x) {
  return function(y) {     //here always x is 5, we return 5+y
    return  x + y;
  };
}
const add5 = makeAdder(5);  
console.log(add5(10));     //15
console.log(add5(15));     //15

(function(i) {
        console.log("IIF var ", i)
    })(i)
const add51 = makeAdder1(5);  
console.log(add51("add51 ",10));     //15
console.log(add51("add51", 15));     //30

function useState(set){
    return function (val){
        set = set + val
        return set;
    }
}

let count = useState(1)
console.log("count ",count(1))
console.log("count ",count(1))
console.log("count ",count(-1))
