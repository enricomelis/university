class LavaggioError extends Error {}

enum TipoLavaggio {
    Intensivo = 90,
    Secco = 60,
    Delicati = 30,
}

enum TipoTessuto {
    Cotone = 1.1,
    Seta = 2,
    Sintetico = 0.9,
    Lana = 1.75,
}

function compatibile(tessuto: TipoTessuto, lavaggio: TipoLavaggio): boolean{
    if(lavaggio == TipoLavaggio.Intensivo)
        if(tessuto == TipoTessuto.Seta || tessuto == TipoTessuto.Lana)
        return false;
    if(tessuto == TipoTessuto.Sintetico && lavaggio == TipoLavaggio.Secco)
        return false;

    return true;

}

type Lavaggio = [TipoTessuto, TipoLavaggio];

function processa(lavaggi: Lavaggio[]): void {
    lavaggi.sort(
        (a, b) => {
            try {
                if(!compatibile(a[0], a[1]) || !compatibile(b[0], b[1]))
                    throw new LavaggioError();
                const tempoA = a[0] * a[1];
                const tempoB = b[0] * b[1];
                return tempoA - tempoB;
            }
            catch(err) {
                throw err;
            }
        }
    );
}