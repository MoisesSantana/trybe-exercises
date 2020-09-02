const word = "trybe";
const endign = "be";

function verificaFimPalavra(palavra, finalPalavra) {
  let cont = 0;
  let letra1 = '';
  let letra2 = '';
  for (i in finalPalavra) {

    letra1 = palavra[palavra.length - (i + 1)]
    letra2 = finalPalavra[finalPalavra.length - (i + 1)]
    
    if (letra1 == letra2) {
      cont += 1;
    }
  }
  return cont == finalPalavra.length;
}

console.log(verificaFimPalavra(word, endign));