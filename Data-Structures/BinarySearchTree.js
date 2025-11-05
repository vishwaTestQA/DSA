class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
      const node = new Node(value)
      if(this.root == null){
        this.root = node;
        return;
      }
      this.bst(node, this.root)
    }

    bst(nodeToInsert, parentNode){
      if(nodeToInsert.value < parentNode.value){
        if(parentNode.left){
           return this.bst(nodeToInsert, parentNode.left)
        } 
           return parentNode.left = nodeToInsert; 
      }else{
        if(parentNode.right){
          return this.bst(nodeToInsert, parentNode.right)
        } 
          return parentNode.right = nodeToInsert;
      }
    }

    search(value){
      if(this.root.value === value){
        return this.root;
      }
     return this.searchBst(value, this.root)
    }

    searchBst(value, parent){
       if(value < parent.value){
         if(parent.left.value === value) 
            return parent.left;
         else {
            return this.searchBst(value, parent.left)
        }
    }else{
            if(parent.right.value === value){
               return parent.right
            }else{
                return this.searchBst(value, parent.right)
            }
       }
    }
    
    printHead(){
        console.log(this.root)
    }

}

const bst = new BinarySearchTree()
bst.insert(10);

bst.insert(5);

bst.insert(15);
bst.insert(12);
bst.insert(3);
bst.printHead();

console.log(bst.search(15))
