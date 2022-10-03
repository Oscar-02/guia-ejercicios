const divide1 = document.getElementById("divide1");
const divide2 = document.getElementById("divide2");
const cubic = document.getElementById("cubic");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const equals1 = document.getElementById("equals1");
const equals2 = document.getElementById("equals2");
const equals3 = document.getElementById("equals3");

Divide();
Cubic();
IMC();

function Divide (){
    var div1Value = parseFloat(divide1.value);
    var div2Value = parseFloat(divide2.value);

    equals1.textContent = isNaN(div1Value) || isNaN(div2Value) ? "Valores no validos" : 0;
    if (!isNaN(div1Value) && !isNaN(div2Value)){
        if (div2Value == 0) equals1.textContent = "Indefinido";
        else equals1.textContent = (div1Value / div2Value).toFixed(4);
    }
}

function Cubic(){
    var cubicValue = parseFloat(cubic.value);
    if (isNaN(cubicValue)) equals2.textContent = "Valores no validos";
    else equals2.textContent = (Math.pow(cubicValue, 3)).toFixed(4);

}

function IMC(){
    var weightValue = parseFloat(weight.value);
    var heightValue = parseFloat(height.value);
    if (isNaN(weightValue) || isNaN(heightValue))equals3.textContent = "Valores no validos";
    else{
        if (heightValue <= 0) equals3.textContent = "Altura no valida (mayor que 0)";
        else {
            equals3.textContent = (weightValue / Math.pow(heightValue, 2)).toFixed(4);
        }
    }
}