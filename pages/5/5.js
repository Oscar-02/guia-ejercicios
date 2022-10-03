document.getElementById("id_side").addEventListener('keypress', enterKeyPressed)

function calculatePerimeter() {

    let side = document.getElementById("id_side").value;
    perimeter = 4 * side; //Formula for Perimeter

    alert("Perimetro: " + perimeter);
}

function enterKeyPressed (e){
    if (e.key == "Enter"){
        calculatePerimeter();
    }

}