var n = prompt("Ingrese la cantidad de alumnos", "");
var n1, n2, n3;
var i = 1;
var j = 1;
var prom;

const datos = [n, 3];

while(i <= n){
    nombre = prompt("Ingrese el nombre del alumno")
    alert(nombre);
    n1 = parseFloat(prompt("Nota 1: "));
    n2 = parseFloat(prompt("Nota 2: "));
    n3 = parseFloat(prompt("Nota 3: "));
    prom = Math.random((n1 + n2 + n3)/3)
    alert("El promedio  del alumno es: " + prom);
    i = i + 1;
}



