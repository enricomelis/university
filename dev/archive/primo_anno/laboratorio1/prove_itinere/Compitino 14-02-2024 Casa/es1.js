class Limortacci {
    constructor(...indici){
        this.#i = indici;
    }
    #i

    *succ(){
        let i = this.#i;
        let k = i.length;

        let j = 0;
        let ctr = 0;
        let a = [];
        while(true){
            j++;
            
            if(0 < j && j <= k){
                a.push(i[j-1]);
            }
            else {
                let sum = 0;

                for(let h = j-k-1; h < j-1; h++){
                    sum += a[h];
                }


                a.push(sum);
            }


            yield a[j-1];
        }

        }
}
