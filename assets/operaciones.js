document.write("<h2>Numeros primos</h2>");
finalizar = parseInt(
  prompt("Ingrese el número hasta donde se revisarán los números primos: ")
);

function numerosPrimos(numero) {
  for (var i = 2; i <= numero - 1; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

document.write("Los números primos hasta " + finalizar + " son: " + "<br>");
for (var primos = 1; primos <= finalizar; primos++) {
  if (numerosPrimos(primos)) {
    document.write(primos + " , ");
  }
}

document.write("<h2>La serie de Fibonacci</h2>");
finalizarSerie = parseInt(
  prompt("Ingrese el número hasta donde se limitará la Serie de Fibonacci: ")
);

function serieFibonacci(numero) {
  var numeros = [0, 1];
  for (var i = 2; i < numero; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  return numeros;
}

document.write(
  "Los " +
    finalizarSerie +
    " primeros números de la Serie de Fibonacci son: " +
    "<br>" +
    serieFibonacci(finalizarSerie)
);

document.write("<h2>Suma Exponenciales</h2>");
finalizarExponencial = parseInt(
  prompt("Ingrese el número hasta donde se evaluaran los exponentes: ")
);

function numerosExponenciales(numero) {
  var exponenciales = 0;
  for (let i = 1; i < numero; i++) {
    exponenciales += Math.pow(i, numero);
  }
  return exponenciales;
}

document.write(
  "La sumatoria de los números cuyo exponente es " +
    finalizarExponencial +
    " hasta el número " +
    finalizarExponencial +
    " es: " +
    "<br>" +
    numerosExponenciales(finalizarExponencial)
);
