type Cmp<T> = (a: T, b: T) => number;

class OrdSet<T>{
    public cmp: Cmp<T>;
    private set: T[];
    constructor(func: Cmp<T>){
        this.cmp = func;
        this.set = [];
    }

    add(e: T){
        let i: number = 0;

        // si può fare anche Ric Binaria
        while(i < this.set.length){
            let comp: number = this.cmp(this.set[i], e);
            if(comp === 0) return;
            i++;
        }

        this.set.push(e);
        this.set.sort(this.cmp);
    }

    remove(e: T){
        let bottom: number = 0;
        let top: number = this.set.length - 1;

        while(bottom <= top){
            let mid: number = Math.floor((top+bottom)/2);
            let comp: number = this.cmp(this.set[mid], e);
            
            if(comp === 0) {this.set.splice(mid, 1); return;}
            else if(comp < 0) bottom = mid + 1;
            else top = mid - 1;
        }
    }

    list(): T[]{
        return this.set;
    }
}