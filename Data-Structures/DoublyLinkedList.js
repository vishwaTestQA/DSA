class Node{
    constructor(value){
        this.value = value
        this.prev = null;
        this.next = null;
    }
}

class DoublyLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;

            //when append the tail is not assigned to the 2nd value inserted
            this.tail = node;

            this.size++;
            return;
        }
        this.size++;   
        node.next = this.head;       
        this.head.prev = node;
        this.head = node;
    }

    append(value){
      const node = new Node(value);
       if(this.isEmpty()) return this.prepend(value)
       this.size++;
       //last node is the tail node;
       //newly created node should point the prev to prev node (i.e current tail node)
       //next of the new node is alredy null;

       node.prev = this.tail;    //1<-2
       this.tail.next = node;    
       this.tail = node;  
       this.size++;
    }

    reverseDLL(){
        let pr = null
        let current = this.head;

        while(current){                //1->2->3->4                            //2->3->4
            let next = current.next;   //2->3->4                              //3->4
            current.next = pr;     //1->null   (.next is now become null)       2->(2<-1->null) 
            current.prev = next;   //  2<-1->null                                 3<-2->()
            pr = current;         //here current is whole 1->null            
            current = next;
        }
        return pr;
    }

    isEmpty(){
        return this.size === 0;
    }

    printHead(){
        console.log(this.head)
    }

    printValue(){
        let current = this.head;
        while(current){
            console.log("prev=======", current.prev)
            console.log("value====", current.value)
            console.log("next=======", current.next)
            current = current.next;
        }
    }
}

const dbl_ll = new DoublyLL()
dbl_ll.append(1);
dbl_ll.append(2);
dbl_ll.append(3);
// dbl_ll.prepend(3);
// dbl_ll.printHead();
console.log(dbl_ll.reverseDLL())

