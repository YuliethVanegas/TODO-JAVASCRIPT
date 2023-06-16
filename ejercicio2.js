//Crea un script que ingresé las medidas de triángulo y me diga su clasificación
function clasificarTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 === lado2 && lado2 === lado3) {
      document.getElementById('resultado').innerHTML = "El triángulo es equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      document.getElementById('resultado').innerHTML = "El triángulo es isósceles.";
    } else {
      document.getElementById('resultado').innerHTML = "El triángulo es escaleno.";
    }
  }
  