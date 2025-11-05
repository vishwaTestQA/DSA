
class Stack{
#stackArr
constructor(arr = []){
  this.#stackArr = arr
}

push(num){
    // this.#stackArr[this.#stackArr.length] = num;
    this.#stackArr.push(num)
}

pop(){
  return this.#stackArr.length ? this.#stackArr.pop() : []
}

getAll(){
    return this.#stackArr;
}

peek(){
    return this.#stackArr.length ? this.#stackArr[0] : []
}

isEmpty(){
    return !this.#stackArr.length
}

size(){
    return this.#stackArr.length
}

stackSize = this.size()

}

const stack = new Stack([1,2,3]);

stack.push(1);
stack.push(2);
stack.pop();
// stack.pop();
console.log(stack.getAll())
console.log(stack.peek())
console.log(stack.isEmpty())
// console.log(stack.stackSize)


//its alredy optimized because push pop is O(1) time complexity

