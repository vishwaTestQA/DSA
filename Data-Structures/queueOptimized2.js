class Queue3{
    constructor(){
        this.count = 0;
        this.items = {}  //here array is not used becz of shifting process when we delete or add anything at begining
        this.rear = 0;
        this.front = 0;
    }
    
    enqueue(elem){
       this.items[this.rear] = elem;
       this.rear++;
       this.count++;
    }

    dequeue(){
        let val = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        this.count--;
        return val;
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        // return Object.keys(this.items).length
        // return this.count
        return this.rear - this.front;
    }

    isEmpty(){
        // return Object.keys(this.items).length === 0
        return !this.count
    }

    print(){
        return Object.values(this.items)
    }
}

const queue3 = new Queue3()
queue3.enqueue("js")
queue3.enqueue("java")
queue3.enqueue("react")

console.log(queue3.print());

queue3.dequeue();
console.log(queue3.print());

console.log(queue3.size());
console.log(queue3.isEmpty());
console.log(queue3.peek());
