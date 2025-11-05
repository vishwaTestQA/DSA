class Queue{
#queueArr
    constructor(arr =[]){
      this.#queueArr = arr
      this.publicVar = []
    }

    unshift(num){
      this.#queueArr.push(num)
    } 

    shift(){
      this.#queueArr.shift()
    }

    getAll(){
        return this.#queueArr
    }
    
}

const queue =  new Queue();
queue.unshift(1);
queue.unshift(0);
console.log(queue.getAll())
queue.shift();
console.log(queue.getAll())