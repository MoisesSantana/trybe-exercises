const n = 5;
let linha = '';

for (let i = n - 1; i > 0; i -= 1) {  // i = 5 - 1 para que no primeiro for com j imprima o asterisco, caso contrário a linha seria toda em branco
  linha = ''; // Sempre que imprimir uma linha preciso limpa-la, se não a segunda linha ficaria '    *   **'
  for (let j = 0; j < n; j += 1) { // enquanto j < n ele imprimirá espaços e quando for maior imprimirá asteriscos, assim consigo imprimir alinhado a direita
    j >= i ? linha += '*' : linha += ' ';
  }
  console.log(linha); // imprimo fora da repetição com j para poder limpar no inicio da repetição i
}