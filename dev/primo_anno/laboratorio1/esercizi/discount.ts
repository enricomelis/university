interface Product {
    name: string;
    price: number;
    category: string;
}

function creaSconti(discount: number = 0.1): (p: Product) => number{
    
    function res(p: Product): number {
        return p.price * discount;
    }

    return res;
}
