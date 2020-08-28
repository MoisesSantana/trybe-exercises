let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for ( let i = 1; i < numbers.length; i += 1) { // Começa no valor 9 - valor 3 agora 
  for (let j = 0; j < i; j += 1) { // começa no valor 5 - valor 9 agora
    if (numbers[i] < numbers[j]){ // 9 é menor que 5? Não! - 3 é menor que 9? Sim!
      let aux = numbers [i]; // Variável auxiliar vai segurar o valor 3 para não ser perdido na troca de valores em baixo 
      numbers[i] = numbers[j]; // o 3 vai receber 9
      numbers[j] = aux; // O 9 vai receber 3 que está seguro na variável auxiliar
    }
  }
}