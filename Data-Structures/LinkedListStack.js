class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LLstack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.lastToSecond = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    //stack push at the end and pop at the end

    push(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node;
        this.tail = node;
        this.size++
        return
      }
      node.next = this.head;
      this.head = node;
      this.size++;
    }

    pop(){
       let value = this.head.value; 
       let next = this.head.next
       this.head = next;
       return value;
    }

    getValue(){
        let current = this.head;
        while(current){
            console.log(current.value)
            current = current.next;
        }
    }

    getHead(){
        console.log(this.head);
    }
}

const llStack = new LLstack()
llStack.push(1)
llStack.getValue()
llStack.push(2)
llStack.getValue()

llStack.push(3)
llStack.getValue()
llStack.push(4)
llStack.getValue()

llStack.getHead()

console.log("pop========")
console.log("popped value", llStack.pop())
llStack.getValue()

console.log("popped value", llStack.pop())
llStack.getValue()

llStack.push(8)
llStack.getValue()

console.log("popped value", llStack.pop())
llStack.getValue()
