function mayormenor(){

    const num1 = parseInt(document.getElementById('firstNumber').value);
    const num2 = parseInt(document.getElementById('secondNumber').value);
    const num3 = parseInt(document.getElementById('thirdNumber').value);
    let mensaje;

    if(num1 > num2 && num1 > num3){
        
        if(num2 > num3){
            alert(`El orden mayor a menor es: ${num1}, ${num2}, ${num3}.
            ${num1 + num2}
            `);

        }
        else{
            alert(`El orden mayor a menor es: ${num1}, ${num3}, ${num2}.`);
        }
        

    }

    if(num2 > num1 && num2 > num3){
        
        if(num1 > num3){
            alert(`El orden mayor a menor es: ${num2}, ${num1}, ${num3}.`);
        }
        else{
            alert(`El orden mayor a menor es: ${num2}, ${num3}, ${num1}.`);
        }

    }

    if(num3 > num1 && num3 > num2){
        
        if(num1 > num2){
            alert(`El orden mayor a menor es: ${num3}, ${num1}, ${num2}.`);
        }
        else{
            alert(`El orden mayor a menor es: ${num3}, ${num2}, ${num1}.`);
        }

    }

    if(num1 == num2 && num1 == num3 && num2 == num3){
        alert(`Los tres numeros son iguales.`);
    }
    
}