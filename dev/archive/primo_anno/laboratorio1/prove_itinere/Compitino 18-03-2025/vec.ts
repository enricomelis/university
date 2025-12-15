class Vec{
    #x: number;
    #y: number;
    constructor(x: number, y: number){
        this.#x = x;
        this.#y = y;
    }

    static zero = new Vec(0, 0);

    get x(): number { return this.#x }
    get y(): number { return this.#y }

    sum(w: Vec): Vec{
        return new Vec(this.#x + w.x, this.#y + w.y)
    }

    mul(a: number): Vec {
        return new Vec(this.#x * a, this.#y * a);
    }

    eq(w: Vec): boolean {
        return (this.#x === w.x && this.#y === w.y);
    }

    ax(a: number): string | undefined{
        if(this.#x === a && this.#y === a) return "xy"
        else if(this.#x === a) return "x";
        else if(this.#y === a) return "y";
        else return undefined
    }
}