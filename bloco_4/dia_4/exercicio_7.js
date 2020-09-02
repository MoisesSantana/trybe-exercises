const arrayDeTeste = [2, 3, 6, 7, 10, 1];

function retornaIndice(arrayDeTeste) {
  let result = 0;
  for (i in arrayDeTeste) {
    if (arrayDeTeste[i] >= result) {
      result = i;
    }
  }
  return result;
}

console.log(`O índice ${retornaIndice(arrayDeTeste)} possuí o maior valor`);