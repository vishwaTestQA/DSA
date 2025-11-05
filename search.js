// Linear search

function linearSearch(arr, target){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([1,2,6,5,-3,2], 2))

//Big O loop  O(n)
//nested loop - (O2n)  //Linear time complexity

// function binarySearch(arr, target){  
//   const middle = Math.floor(arr.length/2);
//   if (arr[middle] === target) return arr[middle]
//   console.log(arr[middle]);
//   if(arr[middle] > target){
//     console.log(arr.slice(0, middle))
//     return binarySearch(arr.slice(0, middle), target); 
//   }else{
//     console.log(arr.slice(middle))
//     return binarySearch(arr.slice(middle), target)
//   }
// }

// function binaryRecursion(arr, ){

// }

function binarySearch(arr, target){  
//   const middle = Math.floor(arr.length/2);    //6
//   if (arr[middle] === target) return middle
//   console.log(arr[middle]);
  return binaryRecursion(arr, 0, arr.length, target)
//   if(arr[middle] > target){
//     console.log(arr.slice(0, middle))
//     // return binaryRecursion(arr.slice(0, middle), target); 
//     return binaryRecursion(arr, 0, middle, target); 
//   }else{
//     console.log(arr.slice(middle))
//     // return binaryRecursion(arr.slice(middle), target)
//     return binaryRecursion(arr, middle, arr.length, target)
//   }
}

function binaryRecursion(arr, start, end, target){
   let midl = Math.floor((start + end)/2)  //0+4/2 = 2
   if(arr[midl] == target) return midl
   if(arr[midl] > target) return binaryRecursion(arr, start, midl, target)
   if(arr[midl] < target) return binaryRecursion(arr, midl, end, target)  
}

console.log(binarySearch([-5,-3,-2,-1,0,1,4,5,6,8,9,10,13,15,17,18], -2))
// Big-O O(logn)

// 4,5,6,8,9,10,13,15,17,18

//0+6/2 = 3

//quicksort
function quickSort(arr){
if(arr<=1) return arr
  let pivot = Math.floor(arr.length/2)   //index 3
  let leftArr = quickSort(arr.slice(0, pivot));
  let rightArr = quickSort(arr.slice(pivot));
  
}

// console.log(quickSort([2,1,5,4,3,7,6]))


//cartesian product
const a = [1,2] , b=[3,4,5]
const res =[]
for(let i=0; i< a.length; i++){
    for(let j=0; j<b.length; j++){
        res.push(a[i]*b[j])
    }
}

console.log(res)
// time Complexity Big-O  ==> is not O2n,
// the two arrays may be in different length hence Big-O O(mn)



//staircase problem
const stairCase = []
function climbStairCase(n){
    if(n<=1) return 1
   return climbStairCase(n-1) + climbStairCase(n-2)
}

console.log(climbStairCase(5))


function climbStairCaseLoop(n){
    const noOfWays = [1,2]
    for(let i = 2; i<n; i++){
        noOfWays.push(noOfWays[i-1]+noOfWays[i-2])
    }
     
    return {noOfWays, sp:noOfWays[n-1]}
}

console.log("loop", climbStairCaseLoop(5))

//Big-O O(n) or linear time complexity  



function towerHonai(){
const rod1 = [8,7,6,5,4,3]
const rod2 = []
const rod3 = []
  let lengthOfRod1 = rod1.length;
  let valFromA =  rod1.pop()
  
  rod3[0] = rod1.pop()
  rod2[0] = rod1.pop()

  towerOfH(rod1, rod2, rod3)

return {rod1, rod2, rod3}
}

function towerOfH(rod1, rod2, rod3){
  let val = rod1.pop();
  if(rod2.length && rod3.length){
    if(rod2[rod2.length-1] > rod3[rod3.length-1]){
        rod2.push(rod3.pop())
    }else{
        rod1.push(rod1.pop())
    }
    rod3.push(val)
  }
}

console.log(towerHonai())
