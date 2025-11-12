class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addvertex(vertex){
        if(this.adjacencyList[vertex]) return;  //if the vertex alredy present
        // this.adjacencyList[vertex] = []
        this.adjacencyList[vertex] = new Set()    //if not present, then add the property 
                                               //and initialize a set so that can add its adjcncy list                                       
    }

    addEdge(vertexA, vertexB){
        if(!this.adjacencyList[vertexA]){
            this.addvertex(vertexA)
        }
        if(!this.adjacencyList[vertexB]){
            this.addvertex(vertexB)
        }

        this.adjacencyList[vertexA].add(vertexB);
        this.adjacencyList[vertexB].add(vertexA);
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "-->" + [...this.adjacencyList[vertex]])
        }
    }

    hasEdge(vertexA, vertexB){
        //here no need to check both conditions as we adding edges betwen two vertex
        return this.adjacencyList[vertexA].has(vertexB) && this.adjacencyList[vertexB].has(vertexA)
    }

    removeEdge(vertexA, vertexB){
       if(!this.adjacencyList[vertexA] || !this.adjacencyList[vertexB]) return
       if(this.adjacencyList[vertexA].has(vertexB) && this.adjacencyList[vertexB].has(vertexA)){
        this.adjacencyList[vertexA].delete(vertexB); 
        this.adjacencyList[vertexB].delete(vertexA);   //its like unfriend
       }
    }

    removeVertex(vertex){
      if(this.adjacencyList[vertex]){
        delete this.adjacencyList[vertex];     //deleting the vertex itself 0(n)
        for(let vrtx in this.adjacencyList){   
            if(this.adjacencyList[vrtx].has(vertex)){
                this.adjacencyList[vrtx].delete(vertex)
            }
        }
      }
    }
}


const graph = new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display()
console.log(graph.hasEdge("A","B"))

// graph.removeEdge("A","B")
graph.removeVertex("B")

graph.display()