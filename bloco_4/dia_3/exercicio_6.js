const n = 50;
let cont = 0;
let result = '';

for (let i = 1; i <= n; i += 1) {
  cont = 0;
  result = i;
  for (let j = 1; j <= i; j += 1) {
    if(i % j == 0) {
      cont += 1;
    }
  }
  cont == 2 ? result += ' - Primo!' : ' - Não primo!';
  console.log(result);
}