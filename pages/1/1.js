var Grado =[];

function ingresarNotas() {
    let nota = document.getElementById('texto').value;
    Grado.push(nota);
    console.log(Grado);
}

function mostrarResultado() {
    var nota_validas = []
    let h1 = document.getElementById('resultado')
    Grado.forEach(element => {
        if(8.5 == element){
            nota_validas.push(element)
        }
    } );      
    h1.innerHTML = "Notas iguales a 8.5: " + nota_validas.length;
}



