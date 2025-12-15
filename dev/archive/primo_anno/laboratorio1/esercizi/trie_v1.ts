class Trie {
    private _value: string;
    private children: Trie[] = [];
    private _flag: boolean;
    private _size: number = 0;

    constructor(v?: string, f?: boolean){
        (v) ? this._value = v : this._value = " ";
        (f) ? this._flag = f : this._flag = false;
    }

    get value(): string { return this._value; }
    get size(): number { return this._size; }

    set size(v: number){ this._size = v; }


    getSize(nodo: Trie): number {
        if (!nodo) return 0;

        let size = nodo.children.length;
        for (let el of nodo.children) {
            size += this.getSize(el);
        }

        return size;
    }

    insert(key: string): void {
        if(!key) return ;

        let [res, idx] = includes( this.children, key[0] );
        if(res){
            this.children[idx].insert( key.substring(1) );
        }
        else {
            if(key.length == 1)
                this.children.push( new Trie( key[0], true ) );
            else
            this.children.push( new Trie( key[0], false ) );

            let len: number = this.children.length;
            this.children[len-1].insert( key.substring(1) );
        }
        sortTrie(this.children);
        this._size = this.getSize(this);
    }

    lookup(key: string): boolean {
        if(!key) return true;
        let [res, idx] = includes( this.children, key[0] );
        if(res){
            return this.children[idx].lookup(key.substring(1));
        }
        else 
            return false
    }

    findPrefix(prefix: string): Trie {
        let [res, idx] = includes(this.children, prefix[0]);
        if(res){
            if(prefix.length == 1){
                return this.children[idx];
            }
            else {
                return this.children[idx].findPrefix(prefix.substring(1));
            }
        }
        else {
            return new Trie("non presente");
        }
    }

    *generator(nodo: Trie): Generator<string>{
        let stringhe: string[] = ["a", "b", "c"];



        for(let str of stringhe)
            yield str;
    }

    prefixSearch(prefix: string): Generator<string> | -1 {
        let x = this.findPrefix(prefix);

        if(x.value !== "non presente")
            return this.generator(x);
        else 
            return -1
    }
}

function includes(array: Trie[], v: string): [boolean, number] {
    for(let idx = 0; idx < array.length; idx++){
        if(array[idx].value == v)
            return [true, idx];
    }
    return [false, -1];
}

function sortTrie(array: Trie[]){
    array.sort(
        (a, b) => { return a.value.localeCompare(b.value)}
    );
}

let trie = new Trie();

trie.insert("ciao");
trie.insert("cane");
