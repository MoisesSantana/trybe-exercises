const n = 5;
let linha = '';

for (let i = 1; i <= n; i += 1) {
  linha = '';
  if (i % 2 != 0){
    for (let j = i; j >= 1; j -= 1) {
      linha += '*';
    }
    console.log(linha);
  }
}