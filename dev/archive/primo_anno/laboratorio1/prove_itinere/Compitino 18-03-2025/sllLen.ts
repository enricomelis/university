type SLLNode = {
    val: any,
    next: SLLNode | null,
}

function sllLen(n: SLLNode | null): number{
    if(n == null) return 0;
    else {
        let curr: SLLNode = n;
        let res: number = 1;
        while(curr.next !== null){
            curr = curr.next;
            res++;
        }
        return res;
    }
}