const fs = require('fs');

class InvalidTraversalError extends Error {}
class InvalidValueError extends Error {}

class BinaryTreeNode {
    #val;
    #sx;
    #dx;

    constructor(val, sx, dx){
        this.#val = val;
        this.#sx = sx;
        this.#dx = dx;
    }

    get val() { return this.#val; }
    set val(v) {
        if(typeof v !== "number") throw new InvalidValueError("Valore deve essere un numero.")
    }

    static #traversal = "simmetrica";

    static get traversal() { return BinaryTreeNode.#traversal; }

    static setTraversal(t){
        if(t !== "simmetrica" && t !== "anticipata" && t !== "posticipata") throw new InvalidTraversalError("Input invalido.")
        BinaryTreeNode.#traversal = t;
    }

    *[Symbol.iterator] () {
        switch(BinaryTreeNode.#traversal){
            case "simmetrica":
                if(this.#sx) yield* this.#sx;
                console.log(this.#val);
                if(this.#dx) yield* this.#dx;

                break;
            case "anticipata":
                console.log(this.#val);
                if(this.#sx) yield* this.#sx;
                if(this.#dx) yield* this.#dx;

                break;
            case "posticipata":
                if(this.#sx) yield* this.#sx;
                if(this.#dx) yield* this.#dx;
                yield this.#val;

                break;
        }
    }

    toString(){
        let res = "";
        for(let el of this)
            res += String(el.val);

        return res;
    }

    toJSON(){
        let res = {"val": this.#val};
        if(this.#sx) res["sx"] = this.#sx.toJSON();
        if(this.#dx) res["dx"] = this.#dx.toJSON();

        return res;
    }

    static fromJSON(obj){
        return new BinaryTreeNode(
            obj.val,
            (obj.sx) ? BinaryTreeNode.fromJSON(obj["sx"]) : null,
            (obj.dx) ? BinaryTreeNode.fromJSON(obj["dx"]) : null,
        )
    }
}

let tree = new BinaryTreeNode(
    3,
    new BinaryTreeNode(
        4,
        new BinaryTreeNode(
            8,
            new BinaryTreeNode(12, null, null),
            null,  
        ),
        new BinaryTreeNode(
            5, 
            null, 
            new BinaryTreeNode(13, null, null)
        )
    ),
    new BinaryTreeNode(
        6,
        new BinaryTreeNode(7, null, null),
        new BinaryTreeNode(
            10, 
            new BinaryTreeNode(0, null, null), 
            null
        )
    )
)

console.log( `Visita ${BinaryTreeNode.traversal} dell'albero parsed: ` );
console.log(tree.toString())

// * ANDATA: scrittura sul file
let path = "./binaryTree/example.json";                     // definizione del path per scrittura/lettura
let json_tree = tree.toJSON();                              // 1. trasformazione di classe in oggetto js
let data = JSON.stringify(json_tree);                       // 2. stringhificazoine dell'oggetto js
fs.writeFileSync(path, data);                               // 3. scrittura sul file


// * RITORNO: lettura dal file
let str = fs.readFileSync(path);                            // 1. lettura dal file -> stringa
let parsed = JSON.parse(str);                               // 2. parsing da stringa a oggetto js
let parsed_tree = BinaryTreeNode.fromJSON(parsed);          // 3. creazione della classe da oggetto js


console.log( `Visita ${BinaryTreeNode.traversal} dell'albero parsed: ` );
console.log(parsed_tree.toString());

module.exports = {
    InvalidTraversalError,
    InvalidValueError, 
    BinaryTreeNode
}