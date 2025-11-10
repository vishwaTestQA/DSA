import { BinarySearchTree } from "./BinarySearchTree.js";

class QueueBST{
    constructor(){
      this.items = {};
      this.front = 0;    // always remove from front
      this.rear = 0;    //always push from rear 
      this.size=0;
    }

    enqueue(item){
      this.items[this.rear] = item;
      this.rear++;
      this.size++;
    }

    dequeue(){
        let item = this.items[this.front]
        delete this.items[this.front];
        this.front++;
        this.size--;
        return item;
    }

    bfsTraversal(node){
       this.enqueue(node);
       while(this.size){
        node = this.dequeue()
        console.log(node.value);
        if(node.left)
        this.enqueue(node.left)
        if(node.right)
        this.enqueue(node.right)
        }
    }
}

const bfs = new BinarySearchTree();
bfs.insert(15);
bfs.insert(12);
bfs.insert(10);

bfs.insert(11);
bfs.insert(17);
bfs.insert(6);
bfs.insert(9);
console.log("========BFS=========")
bfs.printHead()
console.log("========BFS traversal=========")
const queImpl = new QueueBST();
queImpl.bfsTraversal(bfs.root);
