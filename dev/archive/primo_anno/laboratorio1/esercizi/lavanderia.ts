class LavaggioError extends Error {}

enum TipoLavaggio {
    Intensivo = 90,
    Secco = 60,
    Delicati = 30
}

enum TipoTessuto {
    Cotone,
    Seta,
    Sintetico,
    Lana
}

const moltiplicatoriTessuto: Record<TipoTessuto, number> = {
    [TipoTessuto.Cotone]: 1.1,
    [TipoTessuto.Seta]: 2.0,
    [TipoTessuto.Sintetico]: 0.9,
    [TipoTessuto.Lana]: 1.75
};

type Lavaggio = [TipoTessuto, TipoLavaggio];

function compatibile(tessuto: TipoTessuto, lavaggio: TipoLavaggio): boolean {
    if ((tessuto === TipoTessuto.Seta || tessuto === TipoTessuto.Lana) && 
        lavaggio === TipoLavaggio.Intensivo) {
        return false;
    }
    
    if (tessuto === TipoTessuto.Sintetico && lavaggio === TipoLavaggio.Secco) {
        return false;
    }
    
    return true;
}

function tempo(lavaggio: Lavaggio): number {
    const [tessuto, tipoLavaggio] = lavaggio;
    
    if (!compatibile(tessuto, tipoLavaggio)) {
        throw new LavaggioError();
    }
    
    const tempoBase = tipoLavaggio;
    const moltiplicatore = moltiplicatoriTessuto[tessuto];
    
    return tempoBase * moltiplicatore;
}

function processa(lavaggi: Lavaggio[]): void {
    lavaggi.sort((a, b) => {
        try {
            const tempoA = tempo(a);
            const tempoB = tempo(b);
            return tempoA - tempoB;
        } catch (e) {
            throw e;
        }
    });
}