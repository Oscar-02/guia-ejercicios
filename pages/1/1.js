var notas =[];

function ingresarNotas() {
    let nota = document.getElementById('texto').value;
    notas.push(nota);
    console.log(notas);
}

function mostrarResultado() {
    var nota_validas = []
    let h1 = document.getElementById('resultado')
    notas.forEach(element => {
        if(8.5 == element){
            nota_validas.push(element)
        }
    } );      
    h1.innerHTML = nota_validas;
}



