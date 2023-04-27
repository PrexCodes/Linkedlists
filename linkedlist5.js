class Natures{
    constructor(params){
        this.nature = null;
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
        let node = new Natures(val);
        if(!this.pre){
            this.pre = node;
            this.mike = this.pre
        }else{
            this.mike.nature = node;
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

            while(now.nature){
                this.mike = newmike;
                this.mike.nature = null
            }
            this.length--;
            return now;
        }
    }
}