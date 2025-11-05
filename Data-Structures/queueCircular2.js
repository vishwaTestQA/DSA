class QueueCircular2{
    constructor(capacity){
        this.items = {}
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = 0;
        this.front = 0;
    }

    enqueueForUnderstanding(elem){
        if(this.rear === this.capacity){
            this.rear = this.rear % this.capacity;
        }
        console.log(this.rear);
        this.rear++;
        // this.currentLength++;
    }

    enqueueForUnder(){
       this.rear = this.rear % this.capacity;
        console.log(this.rear);
        this.rear++;
    }

     enqueue(elem){
        // if(this.rear === this.capacity){
        //     this.rear = this.rear % this.capacity;
        // }
        // if(this.rear === this.front && this.currentLength!==0){
        //     this.front++;
        // }
        this.rear = this.rear % this.capacity;
        if(this.rear === this.front && this.currentLength>0){
            this.front++;
        }

        this.items[this.rear] = elem;
        this.rear++;
        this.currentLength++;
    }

    dequeue(){
        // if(this.front === this.capacity){
        //     this.front = this.front % this.capacity;
        // }
        this.front = this.front % this.capacity;

        const val = this.items[this.front]
        delete this.items[this.front]
        this.front++;
         this.currentLength--;
         return val;
    }

    print(){
        console.log(this.items)
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    peek(){
        return this.items[this.front] ?? -1
    }
}

const cq2 = new QueueCircular2(4)

cq2.enqueue(10);
cq2.enqueue(20);
cq2.enqueue(30);
cq2.enqueue(40);
cq2.print()
console.log("rear ", cq2.rear, "front", cq2.front)
cq2.enqueue(50);
cq2.print()

console.log("rear ", cq2.rear, "front", cq2.front)
cq2.dequeue();
cq2.print()

cq2.enqueue(60);
cq2.print()


cq2.dequeue();
cq2.print()


cq2.enqueue(70);
cq2.print();

cq2.enqueue(80);
cq2.print();

cq2.dequeue();
cq2.print();

console.log(cq2.peek())

cq2.dequeue();
cq2.dequeue();
cq2.dequeue();
console.log(cq2.peek())

// cq2.enqueue(60);
// cq2.dequeue();
// cq2.dequeue();
// cq2.print()
