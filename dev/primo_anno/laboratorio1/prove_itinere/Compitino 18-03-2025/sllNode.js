function sllLen(n){
    if(n == null) return 0;
    else {
        let curr = n;
        let res = 1;
        while(curr.next !== null){
            curr = curr.next;
            res++;
        }
        return res;
    }
}


