const arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retorneMaiorNome(arrayDeTeste) {
  let result = '';
  let aux = '';
  for (i in arrayDeTeste) {
    aux = arrayDeTeste[i];
    if (aux.length > result.length) {
      result = aux;
    }
  }
  return result;
}

console.log(`O maior nome dentro do array [${arrayDeTeste}] é "${retorneMaiorNome(arrayDeTeste)}"`);