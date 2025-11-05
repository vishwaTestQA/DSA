//fibonocci

function fibonocci(n){
    // let baseArr = [0, 1];
    let baseArr=[0,1]

    for(let i = 2; i<=n; i++){
       baseArr[i] = baseArr[i-1] + (baseArr[i-2])
    }

    return {baseArr, fib:baseArr[n-1]}   // here n-1 is to ensure base case 
    //  if fibonacci(1) then baseArr(1-1) => 0  
    // if fibonacci(2) then baseArr(2-1) => 1
    //if fibonacci(3) then condition satisifies for loop executes then baseArr[3-1] => 
}

console.log(fibonocci(1));

//factorial
function factorial(n){
   let fact=1;
   for(let i = n; i>0; i--){
     fact = fact*i;
   }
   return fact;
}

console.log(factorial(5));

//recursive
function recFactorial(n){
    if(n<1){
        return 1
    }

    return n*recFactorial(n-1)
}

console.log(recFactorial(5));


//prime Number 
function prime(n){
let flag = true;
  if(n == 1) return "not a prime number"
  for(let i =2; i<=Math.sqrt(n); i++){
     if(n%i ==0){
       flag = false
     }
  }
  return flag
}

console.log(prime(57))


function isPowerTwo(n){
    let result = 0;
    let multi = 1;
    for(;;){
       multi = multi*2; 
       result = result+1
       if(multi > n){
        result = -1;
        break;
       }
      if(multi == n){
         break;
      }
    }

    return {result, multi}
}

console.log(isPowerTwo(15))

function isPower2(n){
    let div = n;
    // let power = 0
    while(div > 1){
      if(n%2 !== 0) return -1
       div = div/2;
    //    power = power+1;
    }
    return true
}

console.log(isPower2(16))

// Big -O O(log n)   each time the execution size reduced by half

console.log(Math.pow(8,2))

function bitWise(n){
    if(n<1) return false
    console.log(n & (n-1))
    return (9 & (8)) === 0
}

console.log(bitWise(9))