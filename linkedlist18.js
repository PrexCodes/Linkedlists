const { log } = require("console");

class Node{
    constructor(valss){
        this.nexts = null;
        this.valss = valss
    }
}


class Linkedlist{
    constructor(){
        this.headss = null;
        this.tailss = null;
        this.length = 0;
    }
    addList(valss){
        let node = new Node(valss);
        if(!this.headss){
            this.headss = node;
            this.tailss = this.headss
        }else{
            this.tailss.nexts = node;
            this.tailss = node;
        }
        this.length++
        return this;
    }

    remove(){
        if(!this.headss){
            return undefined
        }else{
            let current = this.tailss;
            let newtailss = current

            while(current.nexts){
                this.tailss = newtailss;
                this.tailss.nexts = null;
            }
            this.length--
            return current;
        }
    }
}

let newlink = new Linkedlist()
console.log(newlink.addList(300))
console.log(newlink.addList(400))
console.log(newlink.addList(500))
console.log(newlink.addList(600))
console.log(newlink.addList(700))
console.log(newlink.remove())

