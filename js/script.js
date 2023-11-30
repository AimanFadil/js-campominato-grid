//Griglia Campo Minato
function creaCella(num, RigaCelle){
    const quadrato = document.createElement('div')
    quadrato.classList.add('quadrato')
    quadrato.style.width = `calc(100% /${RigaCelle})`
    quadrato.innerText = num;
    return quadrato;
}

function CreaGriglia(numeroCelle, RigaCelle){
    for(let i=1; i<=numeroCelle; i++){
        let cella = creaCella(i, RigaCelle);

        cella.addEventListener('click', function(){
            this.classList.add('evidenziato');
            console.log(this.innerText);
            
        });

        griglia.appendChild(cella);
    }
}


function creaNuovoGioco(){
    const griglia = document.getElementById('griglia')

    const difficoltà = document.getElementById('difficoltà')
    let livello = parseInt(difficoltà.value);

    let numeroCelle;
    let NumCellePerRiga;

    switch(livello){
        case 1:
            numeroCelle = 100;
            break;
        case 2:
            numeroCelle = 81;
            break;
        case 3:
            numeroCelle = 49;
            break;
        default:
            break;
    }

    NumCellePerRiga = Math.sqrt(numeroCelle);
    //moltiplicare riga per riga

    griglia.innerHTML = '';
    CreaGriglia(numeroCelle, NumCellePerRiga);

    
}

const bottoneGioco = document.getElementById('gioca')

bottoneGioco.addEventListener('click', function(){
    creaNuovoGioco();
}); 

console.log()