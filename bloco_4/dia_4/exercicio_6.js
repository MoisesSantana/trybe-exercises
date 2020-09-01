const palindromoOuNao = {
  palavra1: "arara",
  palavra2: "Sou Tryber!",
  palavra3: "asa",
  palavra4: "papibaquigrafo",
  palavra5: "mirim"
}

function testePalindrome(valor) {
  let inverso = '';
  for (let i = valor.length - 1 ; i >= 0; i -= 1) {
    inverso += valor[i];
  }
  if ( valor == inverso ){
    return `"${valor}" - é palíndromo`;
  } else {
    return `"${valor}" - não é palíndromo`;
  }
}

for ( key in palindromoOuNao) {
  console.log(' ');
  console.log(testePalindrome(palindromoOuNao[key]));
}