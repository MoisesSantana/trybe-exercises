const arrayDeTeste = [2, 3, 2, 5, 8, 2, 3];

function retorneMaisRepetido(arrayDeTeste) {
  let cont = 0;
  let cont2 = 0;
  for (i in arrayDeTeste) {
    if (cont > cont2){
      cont2 = cont;
      result = arrayDeTeste[i - 1];
    }
    cont = 0;
    for (l in arrayDeTeste) {
      if (arrayDeTeste[i] == arrayDeTeste[l]){
        cont += 1; 
      }  
    }
  }
  return result;
}

console.log(`O número mais repetido no array [${arrayDeTeste}] é ${retorneMaisRepetido(arrayDeTeste)}`);