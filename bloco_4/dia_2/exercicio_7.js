let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (menorNumero > numbers[i]){
      menorNumero = numbers[i];
  }
}
console.log(`O menor número do array [${numbers}] é "${menorNumero}"`);