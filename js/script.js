//Griglia Campo Minato

function creaCella(num, RigaCelle){
    const quadrato = document.createElement('div')
    quadrato.classList.add('quadrato')
    
    return quadrato;
}

function CreaGriglia(){
    for(let i=1; i<=numeroCelle; i++){
        let cella = creaCella(i, RigaCelle);

        griglia.appendChild(cella);
    }
}



function creaNuovoGioco(){
    const griglia = document.getElementById('griglia')

    griglia.innerHTML = ''
    
}

const bottoneGioco = document.getElementById('gioca')

bottoneGioco.addEventListener('click', function(){
    creaNuovoGioco()
}); 