let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = [];
let totalDeImpares = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        numerosImpares.push(numbers[i]);
        totalDeImpares += 1;
    }
}
if (totalDeImpares > 0) {
    console.log(`No array [${numbers}] temos os valores [${numerosImpares}] como ímpares, totalizando "${totalDeImpares}" números ímpares.`);
} else {
    console.log(`Não tivemos números ímpares no array [${numbers}]`)
}