export class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
      const node = new Node(value)
      if(this.root == null){
        this.root = node;
        return;
      }
    //   this.inserBST(node, this.root)
     let parent = this.root;
     while(parent){
       if(value < parent.value){
          if(parent.left == null){
             parent.left = node;
             break;
          }else{
            parent = parent.left;
            continue;
          }
       }else{
        if(value > parent.value){
            if(parent.right == null){
                parent.right = node;
                break;
            }else{
                parent = parent.right;
                continue;
            }
        }
       }
     }
    }

    inserBST(nodeToInsert, parentNode){
      if(nodeToInsert.value < parentNode.value){
        if(parentNode.left == null){
            return parentNode.left = nodeToInsert;
        }
           return this.inserBST(nodeToInsert, parentNode.left)
      }else{
        if(parentNode.right == null){
             return parentNode.right = nodeToInsert;
        }
          return this.inserBST(nodeToInsert, parentNode.right)         
      }
    }

    search(value){
      if(this.root.value === value){
        return this.root;
      }
     return this.searchBST(value, this.root)
    }

    searchBST(value, parent){
       if(value < parent.value){
         if(parent.left.value === value) 
            return parent.left;
         else {
            return this.searchBST(value, parent.left)
        }
    }else{
            if(parent.right.value === value){
               return parent.right
            }else{
                return this.searchBST(value, parent.right)
            }
       }
    }

    delete(value){
       let parent  = this.root;
       let nodeTodelete;
       let parentOfDeletedNode;
       while(parent){
        if(value < parent.value){
            if(parent.left.value == value) {
                nodeTodelete = parent.left;
                parentOfDeletedNode = parent;   //assigning global parent from loop parent (parentOfDeleted)  
                break;
            } else{
                parent = parent.left;
                continue;
            }
        }else{
            if(value > parent.value){
                if(parent.right.value == value) {
                    nodeTodelete = parent.left;
                    parentOfDeletedNode = parent;
                    break;
                }else{
                   parent = parent.right;
                   continue; 
                }
            }
        }
       }
console.log("nodeToDele ==",nodeTodelete);
console.log("its parent of deleted node ===", parentOfDeletedNode);

let isLeftexist=false;
//this is common for any node in the tree, not specifiv to left or right section from root
   if(nodeTodelete.value < parentOfDeletedNode.value){  //to identify if the nodeToDel 
    console.log('nodeTodele',nodeTodelete)               //is left or right of parentOfDel
    console.log('parentofDele',parentOfDeletedNode)
      if(nodeTodelete.right){
         parentOfDeletedNode.left = nodeTodelete.right;
         if(nodeTodelete.left !==null){
            return this.inserBST(nodeTodelete.left, parentOfDeletedNode.left)
         }

      }else{
        parentOfDeletedNode.left = nodeTodelete.left;
      }
       console.log("parentof left", parentOfDeletedNode.left)
    //    this.inserBST(nodeTodelete.left, nodeTodelete.right)
   }

    }
    
    printHead(){
        console.log(this.root)
    }

    // preOrder(root){
    //    if(root == null){
    //     return '';
    //    }
    //    let left = this.preOrder(root.left);
    //    let right = this.preOrder(root.right);
    //    console.log(left,(right))
    // }

 preOrder(node) {
  if (!node) return;
  console.log(node.value);  // Root
  this.preOrder(node.left);     // Left
  this.preOrder(node.right);    // Right
}

inOrder(node){
 if(node == null){
    return node;
 }
  this.inOrder(node.left);
  console.log(node.value)
  this.inOrder(node.right)
}

// left -> right -> node
postOrder(node){
 if(node == null){
    return node;
 }
  this.postOrder(node.left);
  this.postOrder(node.right)
    console.log(node.value)

}

}

const bst = new BinarySearchTree()
bst.insert(15);
bst.insert(12);
bst.insert(10);

bst.insert(11);
bst.insert(17);
bst.insert(6);
bst.insert(9);
// bst.printHead();
console.log("before=========================")
bst.printHead();
console.log("before=========================")
// console.log(bst.search(15))
bst.delete(10)
console.log("=========================")
bst.printHead();
console.log("=========================")

// bst.preOrder(bst.root)
bst.postOrder(bst.root)
