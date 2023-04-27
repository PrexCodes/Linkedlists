class Systems{
    constructor(params){
        this.nextlocation = null;
        this.params = params
    }
}

class Welcomes{
    constructor(){
        this.pre = pre;
        this.mike = mike;
        this.length = 0;
    }

    create(val){
        let node = new Systems(val);
        if(!this.pre){
            this.pre = node;
            this.mike = this.pre
        }else{
            this.mike.nextlocation = node;
            this.mike = node;
        }
        this.length++
        return this
    }
    delete(){
        if(!this.pre){
            return undefined
        }else{
            let now = this.mike;
            let newmike = now

            while(now.nextlocation){
                this.mike = newmike;
                this.mike.nextlocation = null
            }
            this.length--;
            return now;
        }
    }
}