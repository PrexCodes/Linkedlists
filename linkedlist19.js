class Bonjour{
    constructor(params){
        this.nextlocation = null;
        this.params = params
    }
}

class Welcome{
    constructor(){
        this.hed = hed;
        this.tel = tel;
        this.length = 0;
    }

    create(params){
        let node = new Bonjour(params);
        if(!this.hed){
            this.hed = node;
            this.tel = this.hed
        }else{
            this.tel.nextlocation = node;
            this.tel = node;
        }
        this.length++
        return this
    }
    delete(){
        if(!this.hed){
            return undefined
        }else{
            let now = this.tel;
            let newTel = now

            while(now.nextlocation){
                this.tel = newTel;
                this.tel.nextlocation = null
            }
            this.length--;
            return now;
        }
    }
}