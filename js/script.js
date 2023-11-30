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

        

        griglia.appendChild(cella);
    }
}


function creaNuovoGioco(){
    const griglia = document.getElementById('griglia')

    

    griglia.innerHTML = ''
    CreaGriglia(numeroCelle, NumCellePerRiga);
    for(let i=1; i<=100; i++){
        let cella = creaCella(i);


        griglia.appendChild(cella);
    }
}

const bottoneGioco = document.getElementById('gioca')

bottoneGioco.addEventListener('click', function(){
    creaNuovoGioco();
}); 