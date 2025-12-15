class NoKillsError extends Error {}
class JustOneKillError extends Error {}

function* serialKiller(arr){

    if(arr.length === 0){
        throw new NoKillsError;
    }

    if(arr.length === 1){
        yield arr[0];
        throw new JustOneKillError;
    }

    let i = 0;
    while(i < arr.length){
        yield arr[i];
        i++;
    }
}
