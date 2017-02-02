function Area_Cuadrado(num1) {
    document.getElementById("Cuadrado1").innerHTML = "El area del cuadrado es: " + parseInt(Math.pow(num1, 2));
}

function Area_Rectangulo(num1, num2) {
    document.getElementById("Rectangulo1").innerHTML = "El area del Rectangulo es: " + parseInt(num1) * parseInt(num2);
}

function Area_Triangulo(num1, num2) {
    document.getElementById("Triangulo1").innerHTML = "El area del Triangulo es: " + (parseInt(num1) * parseInt(num2)) / 2;
}


function Area_Rombo(num1, num2) {
    document.getElementById("Rombo1").innerHTML = "El area del Rombo es: " + (parseInt(num1) * parseInt(num2)) / 2;
}
