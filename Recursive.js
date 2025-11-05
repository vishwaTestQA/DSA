//fibonacci

function fibRecursive(n){
   if(n <= 1){
     return 1
   } 
  return fibRecursive(n-1) + fibRecursive(n-2);
}

console.log(fibRecursive(5))

function fibRecursive2(n){
   if(n == 0) return [0]
   if(n == 1 ) return [0, 1]
   const series = fibRecursive2(n-1) ;    //ser= 4, ser=3 , ser=2
   series.push(series[series.length-1] + series[series.length-2])
   return series
}

console.log("fibRec2" ,fibRecursive2(4))

//factorial recursive
//if n=5 then 5*4*3*2*1

function factRecursive(n){
    if(n<=1){                //base case return 1 as values when 
        return 1;
    }
    let series = factRecursive(n-1); //executes multiple times
    series = n*series;   //executes for every stack one by one
    return series;  //executes for every stack one by one
}

console.log("fact", factRecursive(5))


//sumation
function sumRecursive(n){
    if(n<=1){
        return 1
    }
//   return n + sumRecursive(n-1)
   let val = sumRecursive(n-1);  // val stack pileup with value 9 to 1
   val = n + val;    //in last loop n=1 it returns immediately,
                    //then n is 2
   return val;
}

console.log("sumRecur ", sumRecursive(10))

//reverse a string
function revStringRecur(str){
   if(str.length <= 1){
    return str;
   } 
   return str.charAt((str.length)-1) + revStringRecur(str.slice(0, str.length-1))  
}

console.log("revStr ", revStringRecur("javascript"))

function printNRecursiveNto1(n){
    if(n<=1) return [1]
    let val = printNRecursiveNto1(n-1)
    val.push(n);
    return val;
}

console.log(printNRecursiveNto1(10))

function printNRecursive1toN(n){
    if(n<=1) return [1]
    let val = printNRecursive1toN(n-1)
    val.unshift(n)
    return val;
}

console.log("N to 1", printNRecursive1toN(10))

//power of a number
function powerOfANumRecursive(base, pw){
    if(pw<=1){
        return base;
    }
    return base * powerOfANumRecursive(base, pw-1);
}

console.log(powerOfANumRecursive(2,4))

function checkPalindrom(str){
    for(let i =0; i<str.length/2; i++){
        if(str[i].toLowerCase() !== str[str.length-1 - i].toLowerCase()){
            return false;
        }
    }
    return true;
}   //0(n)

function palindromeRecursive(str){
    
}

console.log(checkPalindrom("Madam"))

//sum of arry elements
const sumOfArr = [1,2,3,4,5,10];
const res = sumOfArr.reduce((acc, v)=> acc+v,0)
console.log(res)

function sumOfArrRecursive(arr){
    if(arr.length<=1) return arr[0]
    return arr[arr.length-1] + sumOfArrRecursive(arr.slice(0, arr.length-1));
}

console.log(sumOfArrRecursive(sumOfArr));

//find max elem in an array
function findmaxEleInArr(arr){
     if(arr.length <=1) return arr[0]
     let val = findmaxEleInArr(arr.slice(0, arr.length-1));
     val = arr[arr.length-1] > val ? arr[arr.length-1] : val;
     return val;
}

console.log(findmaxEleInArr([2,4,1,5,8,6, 10]));


//permutation of an string
function permutation(str){
   for(let i =0; i< str.length; i++){
    let res = str.charAt(i);
     for(let j=0; j<str.length; j++){
        if(str.charAt(i) !== str.charAt(j)){
            res = res+ str.charAt(j);
        }
     }
      console.log(res)
   }
}

permutation("abc");
