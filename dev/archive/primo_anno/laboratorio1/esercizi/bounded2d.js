class Bounded2DSpace {
    constructor(x, y){
        this.bounded_x = x.filter( x => x >= -10 );
        this.bounded_y = y.filter ( y => y >= -10 );

    }
}

class PyramidSpace extends Bounded2DSpace {

    f(x, y){
        return 1 - Math.abs(x+y) - Math.abs(x-y);
    }

    *generate_pyramid(){
        let i = 0;
        while(i < this.bounded_x.length){
            yield [
                this.bounded_x[i],
                this.bounded_y[i],
                this.f( this.bounded_x[i], this.bounded_y[i] )
            ]
            i++
        }
    }
}
