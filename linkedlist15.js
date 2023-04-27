const { log } = require("console");

class resurrect{
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
    start(val){
        let resurrect = new resurrect(val);
        if(!this.head){
            this.head = resurrect;
            this.tail = this.head
        }else{
            this.tail.next = resurrect;
            this.tail = resurrect;
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
console.log(newlink.start(300))
console.log(newlink.start(400))
console.log(newlink.start(500))
console.log(newlink.start(600))
console.log(newlink.start(700))
console.log(newlink.remove())

