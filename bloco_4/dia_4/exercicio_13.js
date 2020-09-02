function traduzindo(romanos) {
  const numeros = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  result = 0;
  let arrayRomano = [];
  let numAnterior = 0;

  for (key in romanos) {
    arrayRomano.push(romanos[key]);
  }

  for (i in arrayRomano) {
    for (key in numeros) {                                 
      if (arrayRomano[i] == key && ( numAnterior >= numeros[key] || numAnterior == 0)) {
        result += numeros[key];
        numAnterior = numeros[key];
      } else if (arrayRomano[i] == key) {
        result = numeros[key] - result;
        numAnterior = numeros[key];
      }
    }
  }
  return result;
}

console.log(traduzindo("VX"));