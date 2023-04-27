const { log } = require("console");

class Node{
    constructor(val){
        this.next = null;
        this.val = val
    }
}


class Linkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addList(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    }

    remove(){
        if(!this.head){
            return undefined
        }else{
            let current = this.tail;
            let newTail = current

            while(current.next){
                this.tail = newTail;
                this.tail.next = null;
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

