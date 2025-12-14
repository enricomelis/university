function AlberiIdentici(A, B){
    if(!A && !B) return true;
    if(A == undefined || B == undefined) return false;

    return (A.val == B.val && AlberiIdentici(A.sx, B.sx) && AlberiIdentici(A.dx, B.dx));
}

let T1 = {
    val: 4,
    sx: {
        val: 21,
        sx: {
            val: 15
        },
    },
    dx: {
        val: -9
    }
}

let T2 = {
    val: 4,
    sx: {
        val: 21,
        dx: {
            val: 15
        },
    },
    dx: {
        val: -9
    }
}

console.log(AlberiIdentici(T1, T1))