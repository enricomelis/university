class CachedFunction <TipoInput, TipoOutput> {
    #f: (x: TipoInput) => TipoOutput;
    #cache_limit: number;
    #count: number = 0;
    #cache: TipoOutput | undefined;
    
    constructor(f: (x: TipoInput) => TipoOutput, limit: number){
        this.#f = f;
        this.#cache_limit = limit;
    }

    get_cache(v: TipoInput): [TipoOutput, number] | undefined {

        if(!this.#cache)
            return undefined;
        else if(this.#count > this.#cache_limit) {
            return [this.#f(v), 0];
        } 
        else
            return [this.#f(v), this.#count];
    }

    get_value(v: TipoInput): TipoOutput {
        if(this.#count > this.#cache_limit)
            return this.#f(v);
        else if(!this.#cache){
            this.#cache = this.#f(v);
            return this.#cache;
        }
        else {
            this.#count++;
            return this.#cache;
        }
    }
}

class CachedNumericFunction extends CachedFunction<number, number> {}