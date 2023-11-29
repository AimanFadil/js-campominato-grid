//Griglia Campo Minato
function CreaGriglia(){
        document.getElementById('griglia').innerHTML = '';
}
   

function generaGriglia() {
    let griglia = "";
    for (let i = 1; i <= 100; i++) {
        griglia += "<button class='cella '>" + i + "</button>";
        if (i % 10 === 0) {
            griglia += "<br>";
        }
    }
    return griglia;
}

document.getElementById("griglia").innerHTML = generaGriglia();

document.getElementById('gioca').addEventListener('click', function(){
    CreaGriglia();
})
