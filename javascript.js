function mostrarMedia(){
    var valor1 =Number(document.getElementById("num1").value);
    var valor2 =Number(document.getElementById("num2").value);
    var valor3 =Number(document.getElementById("num3").value);

    var result = (valor1 + valor2 + valor3) /3;
    document.getElementById("igual").textContent = "A média é: " + result;
} 