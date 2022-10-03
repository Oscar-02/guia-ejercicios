function mayormenor(){

    var nums = new Array();
    nums[0] = parseInt(document.getElementById('firstNumber').value);
    nums[1] = parseInt(document.getElementById('secondNumber').value);
    nums[2] = parseInt(document.getElementById('thirdNumber').value);

    if(nums[0] < nums[1] && nums[0] < nums[2]){
        
        if(nums[1] < nums[2]){
            alert(`El orden menor a mayor es: ${nums[0]}, ${nums[1]}, ${nums[2]}.`);

        }
        else{
            alert(`El orden menor a mayor es: ${nums[0]}, ${nums[2]}, ${nums[1]}.`);
        }
        

    }

    if(nums[1] < nums[0] && nums[1] < nums[2]){
        
        if(nums[0] < nums[2]){
            alert(`El orden menor a mayor es: ${nums[1]}, ${nums[0]}, ${nums[2]}.`);
        }
        else{
            alert(`El orden menor a mayor es: ${nums[1]}, ${nums[2]}, ${nums[0]}.`);
        }

    }

    if(nums[2] < nums[0] && nums[2] < nums[1]){
        
        if(nums[0] < nums[1]){
            alert(`El orden menor a mayor es: ${nums[2]}, ${nums[0]}, ${nums[1]}.`);
        }
        else{
            alert(`El orden menor a mayor es: ${nums[2]}, ${nums[1]}, ${nums[0]}.`);
        }

    }

    if(nums[0] == nums[1] && nums[0] == nums[2] && nums[1] == nums[2]){
        alert(`Los tres numeros son iguales.`);
    }
    
}