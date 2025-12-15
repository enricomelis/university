function classh(o: object): string[] {
    let res: string[] = [];

    if(!o) return res;

    let proto: object = Object.getPrototypeOf(o);

    while(proto){
        res.unshift(proto.constructor?.name);
        proto = Object.getPrototypeOf(proto)
    }

    return res;
}