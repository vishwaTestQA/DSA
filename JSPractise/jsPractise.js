console.log([]+[[]]+[[[]]]+ !![])   //string true
console.log([]+[[]]+[[[]]]+![])   //string false

// [].every(v => v>0)    error shows
let arr = []
let res = arr.every(v => v>0)
console.log(res)     // true     incase above arr is [null] then false, or [undefined] false

//when 
console.log("[] [] ->", [] + [])   // ""
console.log("[] {} ->", [] + {})   // [object object]
console.log("{} [] ->", {} + [])   // [object object]
console.log("true false ->", true + false)   // [object object]
console.log('5' - 3);  // 2 

console.log("1 < 2 < 3", 1 < 2 < 3);   // (true < 3) => (1 < 3)  => true
console.log("1 < 2 < 0", 1 < 2 < 0);   // (true < 3) => (1 < 0)  => false

console.log("null==0  ", null == 0);  //false
console.log("null<=0  ", null <= 0);   //true
console.log("null>=0  ", null >= 0);   //true

console.log("undefined==0  ", undefined == 0);  //false
console.log("undefined<=0  ", undefined <= 0);   //false
console.log("undefined>=0  ", undefined >= 0);   //false

console.log("typeof NAN", typeof NaN)   // number
console.log("nan == nan", NaN == NaN)   // false

console.log("Boolean('hello') -> ",Boolean("hello")) // true
console.log("Boolean('false') -> ",Boolean("false")) // true
console.log("Boolean('') -> ",Boolean(""))     // true

console.log('Boolean("something","false")',Boolean("something","false")) // true
console.log('Boolean("something","")',Boolean("something",""))     // true
console.log('Boolean("","")',Boolean("",""))     // false

console.log("+true", +true);  //   1
console.log('!!+false -> ', !!+false);   //false    first + unary oprtr converts its operand to number
                                //so false -> 0  => !!0 -> so its false if its !0 thn true

console.log('!!"false" ->', !!"false");  //true  (in norml case a valid or avaialble val is true)
                                                 //if its !str -> false, if its !!str -> true
console.log('false+false -> ', false+false)   //0
console.log('true+false -> ',true+false)   //1
console.log("true+true -> ",true+true)   //2

console.log("true*true -> ", true*true)   //1
console.log("true*false -> ", true*false)   //0
console.log("false*false -> ", false*false)   //0

console.log("1+2+'3'", 1+2+'3')    //3
console.log("'1'+2+3", '1'+2+3)   //123

console.log([] == ![]);   //true  
console.log([] == 0);     //true
console.log('' == 0);    //true


console.log(typeof 1);    //number
console.log(typeof typeof 1);  //string

console.log(!!null);     //false
console.log(!!undefined);  //false
console.log(!!NaN);  //false

console.log({})  //{}
console.log([] + {})   //[object Object]

console.log({} + []);   //[object Object]
// Answer is: 0 (in many consoles it prints "[object Object]" vs 0 — 
// but when parsed as an expression at top level, {} is treated as a block; 
// result is 0 in some engines)
// Why: Ambiguous due to {} parsed as block, +[] → 0. 
// (Avoid relying on top-level parsing — ambiguous.)

console.log(![]);   //false
console.log([] == ![]); //false == false => true (intially [] coherses to "" )

 console.log([1,2] + [3,4]);  //1,23,4
console.log([1,2,] + [3,4]);   //1,23,4

console.log([1] == 1);   // true "1" == 1 numeric comparision

console.log('5' + 3 - 2);    //51   "53" - 2 -> 52 n umeric comparision
console.log('5' + 3 + 2);    // 532
console.log('5' - 3 + 2);  //4

console.log(null == undefined);  // true
console.log(null === undefined);  // false

console.log(null+1); //1   null coherces to 0 in numeric context

console.log(undefined + 1); // NaN 
console.log("str" + 1); // NaN 

console.log(x = (0 ?? 2) || 3)    //3 
// becz nullish oprtr if null or undefined comes then returns 2nd value, 
// here 0 ?? 2 -> no null or undefined hence return 0 
// 0 || 3  -> here 0 is falsy value hence returns truthy 3
// Note: ?? is having higher precedence over ||

console.log(x = (null ?? 2) || 3)    //2 
// its null hence returns 2 -> now it become 2 || 3
//since 2 is a truthy value it returns 2 itself