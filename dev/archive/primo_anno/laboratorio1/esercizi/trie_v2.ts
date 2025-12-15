class TrieNode {
    private _value: string;
    private _children: Map<string, TrieNode>
    private _flag: boolean;

    constructor(v: string = "", f: boolean = false){
        this._value = v;
        this._flag = f;
        this._children = new Map<string, TrieNode>();
    }

    get value(): string { return this._value; }
    get children(): Map<string, TrieNode> { return this._children; }
    get flag(): boolean { return this._flag; }

    set flag(f: boolean){ this._flag = f; }
}

class Trie {
    private root: TrieNode;
    private _size: number;

    constructor(){
        this.root = new TrieNode();
        this._size = 0;
    }

    get size(): number{ return this._size; }

    insert(key: string): void {
        if(!key) return;
        let current: TrieNode = this.root;
        
        for(let i = 0; i < key.length; i++){
            let char = key[i];
            let child = current.children.get(char);
            
            if(!child){
                child = new TrieNode(char, false);
                current.children.set(char, child);
            }
            
            current = child;
        }
        

        if(!current.flag){
            current.flag = true;
            this._size++;
        }
    }

    lookup(key: string): boolean{
        if(!key) return false;

        let current: TrieNode = this.root;

        for(let i = 0; i < key.length; i++){
            let char = key[i];
            let child = current.children.get(char);

            if(!child)
                return false;

            current = child;
        }

        return true;
    }

    private findPrefix(prefix: string): TrieNode | null {
        if(!prefix) return this.root;

        let current = this.root;

        for(let char of prefix){
            let child = current.children.get(char);

            if(!child){
                return null;
            }

            current = child;
        }

        return current;
    }

    private *generator(nodo: TrieNode, prefissoCorrente: string): Generator<string> {
        if(nodo.flag)
            yield prefissoCorrente;

        let keys: string[] = [...nodo.children.keys()].sort();

        for(let char of keys){
            let child: TrieNode | undefined = nodo.children.get(char);
            if(child)
                yield* this.generator(child, prefissoCorrente + char);
        }
    }

    *prefixSearch(prefix: string): Generator<string>{
        let nodo: TrieNode | null = this.findPrefix(prefix);

        if(!nodo)
            return ;

        yield* this.generator(nodo, prefix);
    }
}