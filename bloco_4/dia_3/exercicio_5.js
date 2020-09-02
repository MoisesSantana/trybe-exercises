const n = 13;
let linha = '';
let nLinha = Math.round(n / 2); // numero de linhas impressas
let mvDireita = Math.round(n / 2 + 1); // movimento para direita
let mvEsquerda = Math.floor(n / 2); // movimento para esquerda

for (let i = 1; i <= nLinha; i += 1) { // repetição da linha
  linha = ''; // resetando o valor do output
  if (i == nLinha){  // condicional para imprimir a última linha sem espaços em branco só entrará quando for a última repetição de i
    for(let k = 1; k <= n; k += 1) {  // k vai repetir n vezes a linha de baixo imprimindo a base da piramide
      linha += '*';
    }
  } else { // caso não for a última repetição de i
    for (j = 1; j <= n; j += 1) { // repetirá n ( tamanho horizontal/colunas da piramide ) vezes
      if (j <= mvEsquerda || j > n - mvEsquerda) { // imprimirá espaços em voltas dos *
        linha += ' ';
      } else if (mvEsquerda < j -1 && mvDireita > j + 1) { // imprimirá espaços entre os *
        linha += ' ';
      } else {
        linha += '*'; // imprimirá os *
      }
    } 
  }
  console.log(linha);
  mvEsquerda -= 1; // fazendo a movimentação para esquerda assim a condicional else if da repetição j irá funcionar de forma eficaz
  mvDireita += 1; // fazendo a movimentação para direita assim a condicional else if da repetição j irá funcionar de forma eficaz
}