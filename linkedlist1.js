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




let linkedlist = new Linkedlist();
console.clear();
console.log(linkedlist.addList(300));
console.log(linkedlist.addList(400));
console.log(linkedlist.addList(500));
console.log(linkedlist.addList("Faith"));
console.log(linkedlist.addList("Osaze"));
console.log(linkedlist.remove());
console.log(linkedlist.length);