//Griglia Campo Minato

function creaCella(num, RigaCelle){
    const quadrato = document.createElement('div')
    quadrato.classList.add('quadrato')
    
    return quadrato;
}



function creaNuovoGioco(){
    const griglia = document.getElementById('griglia')

    griglia.innerHTML = ''
    
}

const bottoneGioco = document.getElementById('gioca')

bottoneGioco.addEventListener('click', function(){
    creaNuovoGioco()
}); 