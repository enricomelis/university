class QTNode {
    constructor([x, y]){
        this.x = x;
        this.y = y;
        this.figli = [];
    }

    trovaQuadrante(padre, [x, y]){
        if(x >= padre.x && y >= padre.y)
            return 0;
        else if(x < padre.x && y >= padre.y)
            return 1;
        else if(x < padre.x && y < padre.y)
            return 2;
        else if(x >= padre.x && y < padre.y)
            return 3;
    }

    add(nodo){
        let q = this.trovaQuadrante(this, [nodo.x, nodo.y]);
        if(this.figli[q] == undefined)
            this.figli[q] = nodo;
        else {
            let curr = this;

            while(curr.figli[q] != undefined){
                curr = curr.figli[q];
                q = curr.trovaQuadrante(curr, [nodo.x, nodo.y]);
            }
            curr.figli[q] = nodo;
        }
    }

    find([x, y]){
        let curr = this;
        if(curr.x == x && curr.y == y)
            return this;
        else {
            while(curr != undefined){
                if(curr.x == x && curr.y == y)
                    return curr;
                let q = curr.trovaQuadrante(curr, [x, y]);
                curr = curr.figli[q];
            }
            return null;
        }
    }

    get maxd(){
        if(this.figli.length == 0) return 1;

        let res = -1;
        for(let x of this.figli){
            if(x != undefined){
                let h = x.maxd;
                res = Math.max(res, h);
            }
        }

        return res+1;
    }

    get mind(){
        if(!this)
            return 0;
        else return 1;
    }
}

class QTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    
    addPoint([x, y]){
        this.size++;
        
        if(!this.root)
            this.root = new QTNode([x, y]);
        else {
            let n = new QTNode([x, y]);
            this.root.add(n);
        }
    }

}

var P=[
    [1,1], [2,2], [-5,0], [2,7], [1,-3], [2,2], [2,3], [-1,-4], [0,0],
    [5,-3], [-2,-4], [3,1]
]
var qt=new QTree()
for (var p of P) qt.addPoint(p)

console.log(qt.root.maxd);









/*
class QTNode {
    constructor([x, y]){
        this.x = x;
        this.y = y;
        this.figli = [];
    }

    // figli[0] -> I quadrante
    // figli[1] -> II quadrante
    // figli[2] -> III quadrante
    // figli[3] -> IV quadrante.
    //
    // TODO: 
    //  - [ ] mettere che [0, 0] diventa root quando inserito
    //  - [ ] scrivere add(nodo) ricorsivamente
    //  - [ ] scricere find([x, y]) ricorsivamente
    //  - [ ] fix get maxd(){}
    

    add(nodo){
        let quadrante = -1;
        if(nodo.x > 0 && nodo.y > 0)
            quadrante = 0;
        else if(nodo.x < 0 && nodo.y > 0)
            quadrante = 1;
        else if(nodo.x < 0 && nodo.y < 0)
            quadrante = 2;
        else if(nodo.x > 0 && nodo.y < 0)
            quadrante = 3;

        let curr = this;
        while(curr.figli[quadrante] != undefined)
            curr = curr.figli[quadrante];
        curr.figli[quadrante] = nodo;

    }

    find([x, y]){
        if(this.x === x && this.y === y)
            return this;
        for(let nodo of this.figli){
            if(nodo.x === x && nodo.y === y)
                return nodo
        }
        return null;
    }

    get maxd(){
        let curr = this;
        let [max_0, max_1, max_2, max_3] = [0, 0, 0, 0];
        while(curr.figli[0] != undefined){
            curr = curr.figli[0]
            max_0++;
        }
        curr = this;
        while(curr.figli[1] != undefined){
            curr = curr.figli[1];
            max_1++;
        }
        curr = this;
        while(curr.figli[2] != undefined){
            curr = curr.figli[2];
            max_2++;
        }
        curr = this;
        while(curr.figli[3] != undefined){
            curr = curr.figli[3];
            max_3++;
        }
        return Math.max(max_0, max_1, max_2, max_3);
    }

    get mind(){
        let curr = this;
        let [max_0, max_1, max_2, max_3] = [0, 0, 0, 0];
        while(curr.figli[0] != undefined){
            curr = curr.figli[0]
            max_0++;
        }
        curr = this;
        while(curr.figli[1] != undefined){
            curr = curr.figli[1];
            max_1++;
        }
        curr = this;
        while(curr.figli[2] != undefined){
            curr = curr.figli[2];
            max_2++;
        }
        curr = this;
        while(curr.figli[3] != undefined){
            curr = curr.figli[3];
            max_3++;
        }
        return Math.min(max_0-1, max_1, max_2, max_3);
    }
}

class QTree {
    constructor(){
        this.root = null;
        this.size = 0;
    }


    addPoint([x, y]){
        this.size++;
        if(this.root == null)
            this.root = new QTNode([x, y]);
        else {
            let n = new QTNode([x, y]);
            this.root.add(n);
        }

    }

}

var P=[
    [1,1], [2,2], [-5,0], [2,7], [1,-3], [2,2], [2,3], [-1,-4], [0,0],
    [5,-3], [-2,-4], [3,1]
]
var qt=new QTree()
for (var p of P) qt.addPoint(p)

console.log(qt.root.maxd);

console.log(qt.root.figli[0].maxd);
*/
