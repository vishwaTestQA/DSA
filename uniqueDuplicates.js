const arr = [1,2,3,4,2,3,5,6]

//unique number findings

const dsntReturn = arr.filter((v, i) => {console.log(v," ",i)})   //wont fail 
console.log("unique", dsntReturn);  // [] as the above doesnt return anything

const nonDuplicates = arr.filter(v => arr.indexOf(v) == arr.lastIndexOf(v));
console.log("dupl", nonDuplicates);

// const dupl = arr.filter(v => arr.indexOf(v) !== arr.lastIndexOf(v))
const dupl = arr.filter((v, i) => arr.lastIndexOf(v) !== i); 
console.log("dupl", dupl);

const a = "abc is alphabets"

const getUnique = arr.filter((v, i) => arr.lastIndexOf(v) === i);  //only last element is obtaining hence unique value
console.log("getUnique", getUnique);

const flatRaw = [1, [2, [3, [4]]]]
const flattenArray = flatRaw.flat(Infinity)

console.log(flattenArray);

//recursive

function flatenArray1(arr){   
    let flatenArr = [];
    for(let i = 0; i<arr.length; i++){
     if(Array.isArray(arr[i])){
       return flatenArray1(arr[i])
    }
    return flatenArr.push(arr[i])
    }    
}

const aa = flatenArray1(flatRaw)
console.log("====",aa)
console.log("inside  ",aa)

console.log("From recursion",flatenArray1(flatRaw))

function clos(){
    let a = 0;
    return function closInside(){
        return a++;
    }
}

let an  = clos()    // first time when we Execute a function and store 
// it on a var the whole statement in the function stores in the variable
console.log(an())   //these all works similar to a file, updates 
console.log(an())
console.log(an())   //only return one fn so easily we call it usimg variable an


function closWithArg(arg){
    let a = arg;
    return {
        inc: function incr(){     //unnamed return 
        return ++a;
        },
        dec: function decr(){
           return --a;
        }
}
}

let anArg  = closWithArg(1)    // first time when we Execute a function and store 
// it on a var the whole statement in the function stores in the variable
console.log(anArg.inc())      //these all works similar to a file, updates 
console.log(anArg.inc())
console.log(anArg.dec())   





function fltArray(arr){
    let fltAr = [];
    for(let i =0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
         console.log("====")
         fltAr = fltAr.concat(fltArray(arr[i]))
    }else{
         fltAr.push(arr[i])
    }
    }
   return fltAr
}

console.log(flatRaw)
const arrs = fltArray(flatRaw)
console.log("final  ",arrs)

let arr1 = [1,2,3]
let arr2 = [2,3,4]

console.log(arr1.concat(arr2))

//flatten array by iteration?
function flatenArrayByIterationStack(arr){
  const stack = [...arr], result = []
  while(stack.length){
    const next = stack.pop()    //last item which may be an array or just a value
    Array.isArray(next) ? stack.push(...next) : result.push(next)   //if the next is an array then we destructure it and again push it
  }
  return result.reverse()
}

console.log(flatenArrayByIterationStack(flatRaw))

function flatenArrayByIterationQueue(arr){
  const queue = [...arr], result = []
  while(queue.length){
    const next = queue.shift()    //last item which may be an array or just a value
    Array.isArray(next) ? queue.unshift(...next) : result.push(next)   //if the next is an array then we destructure it and again push it
  }
  return result
}

console.log(flatenArrayByIterationQueue(flatRaw))

//exchange the items in an array without using temp

const excAr1 = [1,2,3,4]
const excAr2 = [5,6,7,8]




// console.log(excAr1-excAr2)   //NAN
// console.log(excAr1+excAr2)   //1,2,3,45,6,7,8
// console.log((excAr1.join(' ').split(' ').map(Number)))   //1,2,3,45,6,7,8
// console.log("string of ",excAr1.map(String))

// console.log("ascii ", "a".charCodeAt(0))
// console.log("bef ",excAr1);
// console.log("bef ",excAr2);

// for(let i =0; i<excAr1.length; i++){
//     excAr1[i] = (excAr2[i]) - (excAr1[i]);
//     excAr2[i] = (excAr2[i]) - (excAr1[i]);
//     excAr1[i] = (excAr2[i]) + (excAr1[i]);
// }

// for(let i =0; i<excArA.length; i++){
//     excArA[i] = (excArB[i]).toString().charCodeAt(0) - (excArA[i]).toString().charCodeAt(0);
//     excArB[i] = (excArB[i]).toString().charCodeAt(0) - (excArA[i]).toString().charCodeAt(0);
//     excArA[i] = (excArB[i]).toString().charCodeAt(0) + (excArA[i]).toString().charCodeAt(0);
// }


// console.log("aftr ", excArA);
// console.log("aftr ",excArB);

// console.log("aftr ", excArA.map(v => String.fromCharCode(v)));
// console.log("aftr ",excArB.map(v => String.fromCharCode(v)));


// important issue: befire using ; 
let excArA = ["a","b","c","d"]  
let excArB = ["e","f","g","h"];  //here when ';' is used then js assumes the below array is different
//before using ; excArA shown as String[] , but excArB as 'any' type while hovering on below

[excArA, excArB]  = [excArB, excArA]    //may be js interprest as [] []=[]
console.log("=============================================");

console.log(excArA, excArB);

let excArC = ["a","b","c","d"]     //but here we didnt see any issues such
let excArD = ["e","f","g","h"]

//excArC and excArD are still pointing to the same arrays they did before.
// But the values inside those arrays have been swapped.
//You and your friend kept your name tags, but swapped your clothes. (here clothes are values)
for(let i = 0 ; i< excArC.length; i++){
    [excArC[i], excArD[i]] = [excArD[i], excArC[i]]
}

console.log(excArC);
console.log(excArD);

const countitems = "a bcdefa bif";
const co = new Map();
for(let i=0; i<countitems.length; i++){
    co.set(countitems.charAt(i), (co.get(countitems.charAt(i)) ? co.get(countitems.charAt(i))+1 : 1))
}

console.log(co)

const countitemsArr = [1,2,1,3,2,"a","a","b","i","c", false];
const coArr = new Map();   //here in map the key can be different, map allows different key
for(let i=0; i<countitemsArr.length; i++){
    // coArr.set(countitemsArr[i].toString(), (coArr.get(countitemsArr[i]) ? coArr.get(countitemsArr[i])+1 : 1));
    coArr.set(countitemsArr[i], (coArr.get(countitemsArr[i]) ? coArr.get(countitemsArr[i])+1 : 1));
}

console.log(coArr);

const co1 = new Map();
for(const ch of countitems){
    co1.set(ch, (co1.get(ch) || 0) +1)
}

console.log(co1)

const words = "apple banana orange apple orange";
const wordObj = {};
const splittedWords = words.split(' ');
for(const wrd of splittedWords){
    wordObj[wrd] = (wordObj[wrd] || 0) +1;
}
console.log("wordObj ",wordObj);

const finalRes = words.split(" ").reduce((acc, item) => {
   acc[item] = (acc[item] || 0)+1
   return acc;
},[])

console.log(finalRes);

//fibonocci

const fib = 8
let firstNumber = 0;
let secondNumber = 1
let final = 0;
const fibArr = [0, 1]
while(final < 10){
    final = firstNumber+secondNumber   //1
    fibArr.push(final)
    firstNumber = secondNumber;
    secondNumber = final 
}

console.log(fibArr);

function fib1(n) {
  if (n <= 1) return n;
  return fib1(n - 1) + fib1(n - 2);
}

console.log(fib1(6)); // 👉 8

// fibonocciSeriesin reduce [0,1]
const reducePalin = Array.from({length: 10}).reduce((acc, _, i) => {
//    acc.push(acc[i] + acc[i+1])
   acc = [...acc, acc[i] + acc[i+1]]
   return acc;   // have to return full array
},[0, 1])

console.log("succesful reduce ", reducePalin)

//palindrome
const palinNumber= 121

const isPalindromeNumber = palinNumber.toString().split('').every((v, i)=> v.indexOf(i) === v.lastIndexOf())

console.log(isPalindromeNumber)

const reversedPalin = palinNumber.toString().split('').reverse().join('')
console.log(reversedPalin == palinNumber);

 //factorial of a number

 const fac =5
 function factorial(n){
    if(n<1){
        return 1
    }
    return n * factorial(n-1)
 }

 console.log(factorial(5))

 //iteration

 let op=1;
 for(let i=fac; i>=1; i--){
    op *=i;
    // op = op * i
 }

 console.log(op)

 //anagram
 const word = "listen", word2 = "silent"
  
 const sort1 = word.split('').sort().join("")
  const sort2 = word2.split('').sort().join("")
  console.log(sort1, sort2)
  console.log(sort1 === sort2)

 //capitalize the word
 const capitaliZeFirstWord = "apple orange banana"
 const capitalized = capitaliZeFirstWord.split(' ').map(item => item.charAt(0).toUpperCase()+item.substring(1))
 console.log(capitalized)

 //find max and min number 
 const maxMinArr = [1,2,3,4,5,6,7,8,9,2,5,6]
 console.log(Math.max(...maxMinArr))
 console.log(Math.min(...maxMinArr))

 //reduce method
 const maxReduce = maxMinArr.reduce((acc, v) => {
   acc =  v > acc ? v : acc
   return acc
 },0)

 const minReduce = maxMinArr.reduce((acc, v) => {
//    if(acc ?? v) return acc
   acc =  acc < acc ? v : acc
   return acc
 })
 console.log(maxReduce);
 console.log(minReduce);

console.log("===================")
//  reverse a list
const reverseList = [1,2,3,4]
const countList = reverseList.length
for(let i=0; i<countList; i++){
    let s =  reverseList.splice((countList-1), 1);  // removing last elemnt
    reverseList.splice(i, 0, s[0]);      //inserting the removed element from starting index 
}

console.log(reverseList)


//second largest number in an array
const secondLargest = [3,5,1,2,7,9]
secondLargest.sort()
console.log(secondLargest[secondLargest.length-2]);

//intersection of 2 arrays   (finding duplicates)
const intersec1 = [1,2,3,2];
const intersec2 = [2,3,4,2];
const finalIntersec = []
for(let i=0; i< intersec1.length; i++){
    if(intersec1.includes(intersec2[i])){
        if(!finalIntersec.includes(intersec2[i]))
           finalIntersec.push(intersec2[i])
    }
}
console.log(finalIntersec);

const intersec2Unique = [...intersec1, ...intersec2].filter((v,i, arr)=> {
    // console.log(arr.indexOf(v),  arr.lastIndexOf(v))
    return i !== arr.lastIndexOf(v)})
console.log(intersec2Unique)

//find longest word in a string
const longestString = "I loveeeeeeeeee programmingiiiiii";
const longestArr = longestString.split(" ").reduce((acc, v)=>{
    acc = acc ? acc.length > v.length ? acc : v : v
    return acc;
})
console.log(longestArr);

const sortlongestWord = longestArr.split(" ").sort()
console.log(sortlongestWord[sortlongestWord.length-1])

//get biggest number without using sort method
const sortWithoutSortMethod = [5,2,1,6,8,9,3,12]
let temp;
for(let i=0; i<sortWithoutSortMethod.length; i++){
    for(let j=0; j<sortWithoutSortMethod.length; j++){
        if(i==j) continue
        temp = sortWithoutSortMethod[i] > sortWithoutSortMethod[j] ? sortWithoutSortMethod[i] : sortWithoutSortMethod[j]      
    }
}
console.log("biggest number",temp)

//sort the full array without using sort
//bubble sort
const sortWithoutSortMethod2 = [5,2,1,2,6,8,9,3,12]
for(let i=0; i<sortWithoutSortMethod2.length; i++){
    for(let j=0; j<sortWithoutSortMethod2.length; j++){
       if(sortWithoutSortMethod2[i] > sortWithoutSortMethod2[j]){
         const temp = sortWithoutSortMethod2[i];
         sortWithoutSortMethod2[i] = sortWithoutSortMethod2[j];
         sortWithoutSortMethod2[j] = temp
       }
    }
}
console.log(sortWithoutSortMethod2)

//bubble sort without using temp variable
// const arrSorted = [5,2,1,2,6,8,9,3,12]
// for(let i = 0; i<arrSorted.length; i++){
//     for(let j=0; j<arrSorted.length; i++){
//  if(arrSorted[i] > arrSorted[j]){
//        [arrSorted[i], arrSorted[j]] = [arrSorted[j], arrSorted[i]]
//     }
// }
// }
// console.log("arrSorted", arrSorted)

//selection sort
const selectionSort = [5,2,1,6,8,9,3,12]

for(let i=0; i< selectionSort.length; i++){
    let minIndex = i;

    for(let j = i+1; j<selectionSort.length; j++){
        if(selectionSort[j] < selectionSort[minIndex]){   //2<5  1<2
            minIndex = j;
        }
    }

    //if minIndex is changed then we need to swap
    if(minIndex !== i){
        [selectionSort[i] , selectionSort[minIndex]] = [selectionSort[minIndex], selectionSort[i]]
    }
}


console.log("selectionSort", selectionSort)

//In react sort() method mostly used which is better than buble sort and selection sort, otherwise can use merge sort and quick sort
//sort => Behind the scenes, V8 (Chrome’s JS engine) uses hybrid algorithms like Timsort (a combination of MergeSort + InsertionSort) which is:

//merge sort
function mergeSort(arr){
    if(arr.length <= 1) return arr; //base case   till the arr contains single item
    // debugger;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
   const sortedArr = []

//    let i =0, j =0
//    while(i < left.length && j< right.length){
//     if(left[i] < right[j]){
//         sortedArr.push(left[i])
//         i++;
//     }else{
//         sortedArr.push(right[j])
//         j++;
//     }
//    }

//    return sortedArr.concat(left.slice(i)).concat(right.slice(j))
    //    return [...sortedArr, ...left, ...right]

    while(left.length && right.length){
    if(left[0] < right[0]){
        sortedArr.push(left.shift())  //shift is to remove the element
    }else{
        sortedArr.push(right.shift())
    }
   }
   return [...sortedArr, ...left, ...right]
}

console.log("merge sort", mergeSort([5,2,1,-6,8,9,3,12]))


// here two parts 1) we recursuvely dividing the problem into halves this is logn time complexity
// 2 part we merge the arrays and this contains while loop, for loop time complexity is linear 
//In merge sort Big-O = O(nlogn) which is best time complexity 


//quick sort
//identify the pivot element in an array, 
//can pick first element, last element, median or random element as pivot
//traverse through the array and put everything left array to the pivot if its smaller than pivot
// and put the elements to the right array if its bigger than pivot element 
// repeat this process till we have array of length 1
//when reaches the condition concat the left array, pivot, right array till one sorted array remain

function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  const pivot = arr[arr.length-1];  //4
  let leftArr=[];
  let rightArr =[];
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] < pivot){
        leftArr.push(arr[i])
    }else{
        rightArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log("quick",quickSort([1,5,3,4,6,2,7]))


//insertion sort 
const insSort = [-6,-1, 7, 20, 8, 7,-2,4, -17,3,7,17,21,-3]

// function insertionSort(arr){
//         let sortedArray = arr.slice(0,1);    // [-6]
//         let unSorted = arr.slice(1);       //[20 8 -2 4]
//     //take first element as sorted 
//     for(let i = 0; i< arr.length-1; i++){   //arr len 5
//         console.log("iiiiiii ",i, sortedArray, unSorted);
//         for(let j=0; j<unSorted.length-1; j++){  
//             for(let k=sortedArray.length-1; k>=0; k--){      // runs only once as sorted
//                 console.log('sorted num', sortedArray.length, "unsor", unSorted.length, "sorted k",sortedArray[k]) 
//                if(unSorted[j] > sortedArray[k]){    //20 > -6
//                   const rem = unSorted.splice(j,1)
//                   sortedArray[k+1] = rem[0]
//                   j=-1;
//                   console.log("inside if ", sortedArray, unSorted)    //[-6 20]
//                //[8 -2 4]
//                }else{
//                    const rem = unSorted.splice(j,1)
//                    j=-1
//                    sortedArray.splice((k), 0, rem[0])   // [-6, 8, 20]
//                    console.log("else  ", sortedArray, unSorted)
//                }
//             }
//         }
//     }
//     return arr;
// }

// [-6,-1,20, 8, 7, -2, 4]

function insertionSort(arr){
        let sortedArray = arr.slice(0,1);    // [-6]
        let unSorted = arr.slice(1);       //[20 8 -2 4]        
        while(unSorted.length){ 
            let sorLen = sortedArray.length
            for(let k = sorLen-1; k>=0; k--){      // runs only once as sorted
               console.log('sorted num', sortedArray, "unsor", unSorted, "sorted k",sortedArray[k]) 
               if(unSorted.length){
               if(unSorted[0] > sortedArray[k]){    //20 > -6
                  const rem = unSorted.shift()
                  sortedArray.splice(k+1,0, rem)   //inserting right to the elem
                  console.log("inside if ", sortedArray, unSorted)    //[-6 20]
                  break;
               //[8 -2 4]
               }else{
                if(k==0){
                   const rem = unSorted.shift()
                    console.log("======= sorting ", rem, k, sortedArray[k])
                   console.log("rem   ",rem, k)
                //    sortedArray.splice(k-1, 0, rem) 
                   sortedArray.unshift(rem)
                   break;
                }
               }
            }
            }
    }
    return sortedArray;
}

console.log("ins", insertionSort(insSort))


function insertionSort2(arr1){
    const arr = arr1;
    for(let i =1; i<arr.length; i++){
        const numberToInsert = arr[i];  //20   //8
        const sortedArr = arr.slice(0,i);    //[-6] [20, 8, -2, 4]  //[-6 20] [8 -2 4]
        for(let j=sortedArr.length-1; j>=0; j--){
           if(numberToInsert > sortedArr[j]){
              const spl = arr.splice(i,1);
              console.log('spl ', spl)
              arr[j+1] = spl[0];
              break;
           }else{
            // if(j == 0){
            //     console.log("jjj==00", numberToInsert)
            //     const spl = arr.splice(i,1)
            //     console.log('spl', spl)
            //     arr.unshift(spl[0])
            //     break;
            // }
           }
            const spl = arr.splice(i,1)
                console.log('spl', spl)
                arr.unshift(spl[0])
        }
    }
    return arr;
}

// console.log(insertionSort2([1,2,-6,-2,4,20]))