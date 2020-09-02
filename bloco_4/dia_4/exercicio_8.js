const arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];

function retorneMenorIndice(arrayDeTeste) {
  let result = 0;
  for (i in arrayDeTeste) {
    if (arrayDeTeste[i] <= result) {
      result = i;
    }
  }
  return result;
}

console.log(`O menor valor do array ${arrayDeTeste} fica no índice ${retorneMenorIndice(arrayDeTeste)}`);