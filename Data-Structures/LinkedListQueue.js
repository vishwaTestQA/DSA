import {Node} from './LinkedList.js'

class LLQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    enqueue(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.size++;
            return
        }
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    dequeue(){
       let value = this.head.value;
       this.head = this.head.next;
       return value;
    }

    printValue(){
        let current = this.head;
        while(current){
            console.log("curr", current.value)
            current = current.next
        }
    }
}

const llqueue = new LLQueue();

llqueue.enqueue(1);
// llqueue.printValue();

llqueue.enqueue(2);
llqueue.printValue();

llqueue.dequeue();

llqueue.enqueue(3);

llqueue.printValue()

llqueue.dequeue();

llqueue.printValue()