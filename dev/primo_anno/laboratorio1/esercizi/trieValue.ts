class TrieNode<T> {
    private _value: T | undefined;
    private _children: Map<string, TrieNode<T>> = new Map<string, TrieNode<T>>();

    constructor(){}

    get value(): T | undefined { return this._value; }
    get children(): Map<string, TrieNode<T>> { return this._children; }

    set value(v: T){ this._value = v; }
}

class Trie<T> {
    private root: TrieNode<T>;
    private _size: number;

    constructor() {
        this.root = new TrieNode<T>();
        this._size = 0;
    }

    insert(key: string, value: T){
        let current: TrieNode<T> = this.root;
        for(let char of key){
            if(!current.children.has(char)){
                current.children.set(char, new TrieNode<T>);
            }
            current = current.children.get(char)!;
            if(current.value == undefined){
                this._size++;
            }
            current.value = value;
        }
    }

    lookup(key: string){
        let current: TrieNode<T> = this.root;

        for(let char of key){
            let child = current.children.get(char);

            if(!child) return false;
            else current = child;
        }

        return true;
    }

    private findPrefix(prefix: string): TrieNode<T> | null {
        if(!prefix) return this.root;

        let current = this.root;

        for(let char of prefix){
            let child = current.children.get(char);

            if(!child) return null;
            else current = child;
        }

        return current;
    }

    private *generator(node: TrieNode<T>, currentPrefix: string): Generator<[string, T]>{
        if(node.value !== undefined){
            yield [currentPrefix, node.value];
        }
        for(let [char, child] of node.children){
            yield* this.generator(child, currentPrefix + char);
        }
    }

    *prefixSearch(prefix: string){
        let nodo: TrieNode<T> | null = this.findPrefix(prefix);

        if(!nodo) return ;

        yield *this.generator(nodo, prefix);
    }


    // * ESERCIZIO 5: metodo reduce
    private reduceAux<U>(node: TrieNode<T>, f: (accumulator: U, currentValue: T) => U, accumulator: U): U {
        if (node.value !== undefined)
            accumulator = f(accumulator, node.value)
        for (let child of node.children.values())
            accumulator = this.reduceAux(child, f, accumulator)
        return accumulator
    }

    reduce<U>(f: (accumulator: U, currentValue: T) => U, initialValue: U): U {
        return this.reduceAux(this.root, f, initialValue)
    }
}

let trie = new Trie<number>();
trie.insert("ciao", 3);
trie.insert("cina", 4);
trie.insert("cane", 5);
trie.insert("palle", 2);

console.log("ciao");

for(let x of trie.prefixSearch("ci")){
    console.log(x);
}