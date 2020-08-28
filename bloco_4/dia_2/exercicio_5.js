let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
  }
}
console.log(`O maior número no array [${numbers}] é "${maiorNumero}"`);