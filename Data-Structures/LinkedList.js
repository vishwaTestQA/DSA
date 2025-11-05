export class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
    this.lastNode = null;

    this.tail = null;
  }

  isEmpty(){
    return this.size === 0;
  }

  getSize(){
    return this.size;
  }

// O(1) constant
  prepend(val){
    const node = new Node(val);  //"ab", null
    this.size++;
    if(this.isEmpty()){
    this.head = node;     //"ab", null
    return
    }
    node.next = this.head; 
    this.head = node;
  }

  // O(n) linear compleity
  append(val){
    if(this.isEmpty()){
       return this.prepend(val)
    }
    const node = new Node(val);
    this.size++;
     let nextNode = this.head;  //initially it has both val and next
     while(nextNode){
       if(nextNode.next == null){
         nextNode.next = node;
         break;
       }
       nextNode = nextNode.next;
     }
  }

  insert(val, indx){
     if(this.isEmpty() && indx == 0){
        this.prepend();
     }
     if(indx > this.size || indx < 0) throw new Error("cannot")
     const node = new Node(val);
     let i = 0;
     let nextNode = this.head;
     while(i<this.size){ 
       if(i == indx-1){ 
          let next = nextNode.next; 
          nextNode.next = node;
          node.next = next;
          break;
       }
       nextNode = nextNode.next
       i++;
     }
     this.size++;
  }

 

  removeFirst(){
    let next = this.head.next;
    this.head = next;
    this.size--
  }

  removeLast(){
    let nextNode = this.head;
    for(let i=0; i<this.size; i++){
        if(i == this.size-2){
          nextNode.next = null;
          break;
        }
        nextNode = nextNode.next
    }
    this.size--;
  }

  // remove(index){
  //   if(index === 0){
  //       this.removeFirst()
  //   }
  //   let nextNode = this.head;
  //   let firstPart;
  //   let secondPart;
  //   for(let i = 0; i<this.size; i++){
  //       if(index-1 == i){
  //         firstPart = nextNode;     
  //         secondPart = nextNode.next.next;     //
  //         firstPart.next = secondPart;
  //         nextNode = firstPart;
  //         break;
  //       }
  //       nextNode = nextNode.next;
  //   }
  //   this.size--;
  // }

    remove(index){
    if(index<0 || index>this.size-1) return null  
    if(index === 0 || this.size==1){
        this.removeFirst()
    }
    let current = this.head;   //oth index
    let finalNodes;
    for(let i = 1; i<this.size; i++){
        if(index == i){
          finalNodes = current;     
          finalNodes.next = finalNodes.next.next;     //
          break;
        }
        current = current.next;
    }
    this.size--;
  }


  removeByValue(value){
     let current = this.head;                //cc
     console.log(current)
     let firstPart;
     let secondPart;
     for(let i = 0; i<this.size; i++){
        if(current.value === value){  
            console.log();
            if(i == 0){
                this.head = current.next;
                break;
            }
            console.log(value)
           secondPart = current.next
           console.log("secnd", secondPart)
           firstPart.next = secondPart;
           console.log("firstPart", firstPart)
           this.head = firstPart;
           break; 
        }
        firstPart = current;
        current = current.next;
     }
     this.size--;
     return current;
  }

  //return the index of the node or the whole node, if the value not exist then ret -1
  search(val){

  }

  reverseList(){
    let prev = null;
    let current = this.head;     //1->2->3-4    //2
    while(current){    //1->2->3->4     //2->3->4
       let next = current.next; //2->3->4      //not changing  //3->4
      //  console.log(current.next)
       current.next = prev;      //1->null      // 2->1->null
       
       prev = current;     //2->1->null
      //  console.log("after prev", prev)
       current = next;   
      //  console.log("curr", current)  

    } 
    return prev;
  }

  getValue(){
     if(this.isEmpty()) return null
     let nextNode = this.head;  
     let listValue = ''
     while(nextNode){
      listValue += `${nextNode.value}`
      nextNode = nextNode.next;  
     }
    console.log(listValue)
  }

  printHead(){
    console.log(this.head)
  }

   insertWithTail(val){  //as we appending at last no need to set node.next = null again
    let node = new Node(val);  
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;     //both head and tail has .next=null when creating first node
      this.size++;
      return
    }
    this.size++;
    this.tail.next = node;
    this.tail = node;
  }
}

const list = new LinkedList()
// list.prepend("aa");     //2

// list.prepend("bb");   //1

// list.prepend("cc");   //0
// // console.log(list.head)
// list.append("dd");    //3

// list.insert("inter", 2)
// list.getValue();
// // list.printHead()
// console.log("==============")
// // list.removeFirst()
// // list.removeLast()
// // list.remove(2)
// // list.removeByValue("inter")
// console.log(list.reverseList())
// list.getValue();

// list.insertWithTail(1)
// console.log(list.head);

// list.insertWithTail(2)
// console.log(list.head);



// list.prepend(4)
// console.log(list.head);



// list.prepend(0)
// console.log(list.head);

// list.insertWithTail(3)
// console.log(list.head);

// list.insertWithTail(6)
// console.log(list.head);

// list.insertWithTail(7)
// console.log(list.head);


list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printHead()
list.getValue();

list.remove(2)
list.getValue();

list.remove(2)
list.getValue();
