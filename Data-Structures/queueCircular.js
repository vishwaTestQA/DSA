// class QueueCircular{
//     constructor(){
//         this.items = {}
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(elem){
//            this.items[this.rear] = elem;
//            this.rear++;
//            if(this.rear == 5){
//             this.rear = 0;
//            }
//     }

//     dequeue(){
//         const val = this.items[this.front]
//         console.log(val);
//         delete this.items[this.front]
//         this.front++;
//         if(this.front == 5){
//           this.front = 0;
//         }
//         return val;
//     }

//     print(){
//         return this.items
//     }
// }

// const queueCir = new QueueCircular()
// queueCir.enqueue(1);      //rear 0 
// console.log(queueCir.rear, queueCir.front) //1 0
// queueCir.enqueue(2);
// console.log(queueCir.rear, queueCir.front) //2 0
// queueCir.enqueue(3);
// console.log(queueCir.rear, queueCir.front) //3 0
// queueCir.enqueue(4);
// console.log(queueCir.rear, queueCir.front) //4 0
// queueCir.enqueue(5);
// console.log(queueCir.rear, queueCir.front) // 0 0
// console.log(queueCir.print());

// queueCir.dequeue();
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)   // 0 1

// queueCir.enqueue(6);        
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)  //1 1j

// queueCir.dequeue();
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)

// queueCir.dequeue();
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)

// queueCir.enqueue(7);
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)

// queueCir.enqueue(8);
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)


// queueCir.enqueue(9);
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)

// queueCir.dequeue();
// console.log(queueCir.print());
// console.log(queueCir.rear, queueCir.front)

class QueueCircular{
    constructor(capacity){
        this.items = {}
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = 0;
        this.front = -1;
    }

    enqueue(elem){
        //    if(this.items[this.rear]){
        //      throw new Error("queue is full")
        //    }
           if(this.rear === this.capacity){
            this.rear = 0;
           }
           this.items[this.rear] = elem;
           this.rear++;
           this.currentLength++;
    }

    dequeue(){
        if(!this.items[this.front]){
            throw new Error("No items in the cart")
        }
        const val = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        if(this.front == this.capacity){
          this.front = 0;
        }
         this.currentLength--;
        return val;
    }

    print(){
        return this.items
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    peek(){
        return this.items[this.front] ?? this.items[this.front]
    }
}

const queueCir = new QueueCircular(6)
queueCir.enqueue(1);      //rear 0 
queueCir.enqueue(2);
queueCir.enqueue(3);
queueCir.enqueue(4);
queueCir.enqueue(5);
console.log(queueCir.print());

console.log("isEmpty", queueCir.isEmpty())
console.log("isFull", queueCir.isFull())
console.log(queueCir.peek())

queueCir.enqueue(6);
console.log(queueCir.print());
console.log("isFull", queueCir.isFull())


queueCir.dequeue();
console.log(queueCir.print());
console.log("isFull", queueCir.isFull())
console.log(queueCir.peek())

queueCir.dequeue();
queueCir.dequeue();
queueCir.dequeue();
console.log(queueCir.peek())
queueCir.dequeue();
queueCir.dequeue();
console.log("isFull", queueCir.isFull())
console.log("isEmpty", queueCir.isEmpty())