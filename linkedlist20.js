class NodePatterns{
    constructor(values){
        this.values = values;
        this.next = null
    }
}

class LinkedListPatterns{
    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0;
    
    }
    newlist(values){
        let nodepattern = new NodePatterns(values)
        if(!head){
            this.head = nodepattern;
            this.tail = this.head
        }else{
            this.tail.next = node;
            this.tail = node;
        }this.length++;
        return this
    }

    comotItem(){
        if(!this.head){
            return undefined
        }else{
            let currentState = this.tail;
            let tailnature = currentState

            while(currentState.next){
                this.tail = tailnature;
                this.tail.next = null;
            }
            this.length--;
            return this;
        }
    }

}

let newTest = new LinkedListPatterns()
newTest.newlist(3000)
newTest.newlist(3000)
newTest.newlist(3000)
newTest.newlist(3000)
newTest.comotItem()