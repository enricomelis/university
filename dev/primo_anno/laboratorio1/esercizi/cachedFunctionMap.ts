class CachedFunction<T, U> {
    private f: (x: T) => U;
    private cache_limit: number;
    private cache: Map<T, [U, number]>;

    constructor(f: (x: T) => U, limit: number){
        this.f = f;
        this.cache_limit = limit;
        this.cache = new Map<T, [U, number]>();
    }

    get_cache(val: T): [U, number] | undefined {
        return this.cache.get(val);
    }

    get_value(val: T): U {
        if(this.cache.has(val)){
            let [value, count] = this.cache.get(val) as [U, number];
            if(count < this.cache_limit){
                this.cache.set(val, [value, count+1]);
                return value;
            }
        }
        let new_value = this.f(val);
        this.cache.set(val, [new_value, 0]);
        return new_value;
    }
}

class CachedNumericFunction extends CachedFunction<number, number> {
    constructor(f: (x: number) => number, limit: number){
        super(f, limit);
    }
}