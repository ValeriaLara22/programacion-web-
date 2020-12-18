function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";

  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

const cad = invertir("Valeria");
console.log(cad);


const ca = invertir("uno dos tres cuatro");
console.log(ca);