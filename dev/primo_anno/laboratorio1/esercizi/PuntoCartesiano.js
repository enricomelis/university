class PuntoCartesiano {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    dist(q){
        return Math.sqrt( (q.x + this.x)**2 + (q.y - this.y)**2);
    }

    translate(q){
        this.x = q.x;
        this.y = q.y;
    }

    zero(){
        this.x = 0;
        this.y = 0;
    }
}
