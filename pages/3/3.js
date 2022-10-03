const nombre = document.getElementById("namePerson");
const nota1 = document.getElementById("value1");
const nota2 = document.getElementById("value2");
const nota3 = document.getElementById("value3");

var nombres = new Array();
var notas = new Array();

function onClickButton(){
    var nombreVal = nombre.value.toString();
    var nota1Val = parseFloat(nota1.value);
    var nota2Val = parseFloat(nota2.value);
    var nota3Val = parseFloat(nota3.value);

    if (nombreVal && nota1Val && nota2Val && nota3Val){
        if (nota1Val < 0 || nota2Val < 0 || nota3Val < 0){
            alert('Lo sentimos, puede que algunos de los valores ingresados es menor a la nota minima (0.0).')
        }
        else if (nota1Val > 10 || nota2Val > 10 || nota3Val > 10){
            alert('Lo sentimos, puede que algunos de los valores ingresados es mayor a la nota maxima (10.0).')
        }
        else{
            nombres[nombres.length] = nombreVal;
            notas[notas.length] = [nota1Val, nota2Val, nota3Val];

            var prom = (nota1Val + nota2Val + nota3Val) / 3;
            var data = document.getElementById("info").getElementsByTagName("tbody")[0].insertRow();
            var cell0 = data.insertCell(0);
            var cell1 = data.insertCell(1);
            var cell2 = data.insertCell(2);
            var cell3 = data.insertCell(3);
            var cell4 = data.insertCell(4);
            cell0.innerHTML = nombreVal;
            cell1.innerHTML = nota1Val.toFixed(1);
            cell2.innerHTML = nota2Val.toFixed(1);
            cell3.innerHTML = nota3Val.toFixed(1);
            cell4.innerHTML = prom.toFixed(1);
        }
    }
    else alert('Lo sentimos, pero uno o varios de los campos estan vacios o no tienen el formato correcto.');
}

//var data = document.getElementById("info").getElementsByTagName('tbody')[0].insertRow(); 
// data.innerHTML = "cell";