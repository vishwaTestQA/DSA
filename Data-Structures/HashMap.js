class HashTable{
    constructor(){
        // this.map = new Array(5);
        this.map = new Int32Array(this.capacity);
        // this.capacity = this.map.length;
    }

    hash(key){
        let index = 0;
        for(let i =0; i<key.length; i++){
          console.log("char", key.charCodeAt(i))
          index = index + key.charCodeAt(i);
        }
        console.log(index)
        return index % this.capacity;
    }

    set(key, value){
       const index = this.hash(key);
       console.log(index, value);
       this.map[index] = value;
       console.log(this.map.length)
       if(this.map.length === this.capacity) {
        this.capacity = this.capacity*2;
       }
    }

    get(key){
    //    const index = this.hash(key);
    //    return this.map[index];
       return this.map[key]
    }

    printMap(){
        console.log(this.map)
    }

    setCheck(key, value){
     if(this.map[this.map.length-1]){
        console.log("yses")
        this.capacity = 10;
       }
       this.map[key] = value
       console.log(this.map.length, value)
      
    }
    deletecheck(key){
      this.map[key] = undefined
    // this.map.splice(key,1)
    }
}

const hash = new HashTable()
// hash.set("in", "india")
// hash.set("au", "australia")
// hash.set("nz", "newzland")
// hash.set("us", "united states")
// hash.set("uk", "unitedkingdom")
// hash.set("bzzz", "brazil")

// hash.set(1, "one")
// hash.set(2, "two")
// hash.set(3, "three")
// hash.set(4, "four")
// hash.set(5, "five")
// hash.set(null, "five")



// console.log(hash.get(3));
// console.log(hash.get("vi"));

// hash.setCheck(1, "one")
// hash.setCheck(2, "two")
// hash.setCheck(3, "three")
// hash.setCheck(4, "four")
// hash.setCheck(5, "five")
// hash.setCheck(6, "six")

hash.setCheck(0, 10)
hash.setCheck(2, 20)
hash.setCheck(3, 30)
hash.setCheck(4, 40)
hash.setCheck(5, 50)
hash.setCheck(6, 60)

// hash.deletecheck(4)

hash.printMap()