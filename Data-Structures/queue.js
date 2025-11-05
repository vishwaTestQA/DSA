class Queue{
#queueArr
    constructor(arr =[]){
      this.#queueArr = arr
      this.publicVar = []
    }

    enqueue(num){
      this.#queueArr.push(num)
    } 

    dequeue(){
      this.#queueArr.shift()
    }

    getAll(){
        return this.#queueArr
    }
    
}

const queue =  new Queue();
queue.enqueue(1);
queue.enqueue(0);
console.log(queue.getAll())
queue.dequeue();
console.log(queue.getAll())