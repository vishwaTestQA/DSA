class QueueOptimized{
    #map;
    constructor(){
     this.#map = new Map();
     this.rear = 0;
     this.front =0;
    }

    enqueue(elem){
        this.#map.set(this.rear, elem)       //0, a //1,b //2,c
        this.rear++;
    }

    dequeue(){
        let val =  this.#map.get(this.front);   
        this.#map.delete(this.front);
        this.front++;
        return val;
    }

    print(){
        return this.#map
    }

    isEmpty(){
        return this.#map.size === 0
    }

    peek(){
        return this.#map.get(this.front)
    }
}

const queueOptimized = new QueueOptimized();
queueOptimized.enqueue("tom");

queueOptimized.enqueue("jerry");

console.log(queueOptimized.print());

queueOptimized.dequeue()

console.log(queueOptimized.print());
console.log(queueOptimized.peek())
console.log(queueOptimized.isEmpty())

