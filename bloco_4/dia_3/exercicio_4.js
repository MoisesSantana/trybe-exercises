const n = 7;
let linha = '';
let nLinhas = Math.round(n / 2);
let contEspacos = Math.floor(n / 2);

for (let i = 1; i <= nLinhas; i += 1) {
  linha = '';
  for (j = 1; j <= n; j += 1) {
    if (j <= contEspacos || j > n - contEspacos) {
      linha += ' ';
    } else {
      linha += '*';
    }
  }
  console.log(linha);
  contEspacos -= 1;
}