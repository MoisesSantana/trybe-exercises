const valorDeCusto = -10;
const valorDeVenda = 0;
let lucro = 0;

console.log(`O custo do produto é R$${valorDeCusto},00`);
console.log(`20% de ímposto sobre o valor de custo totalizando R$${( valorDeCusto / 100 ) * 20 + valorDeCusto},00`);

if ( valorDeCusto > 0 && valorDeVenda > 0) {
  lucro = valorDeVenda - (( valorDeCusto / 100 ) * 20 + valorDeCusto );
  lucro *= 1000;
  if ( lucro > 0 ) {
    console.log(`O seu lucro após mil vendas será de R$${lucro},00`);
  } else if ( lucro < 0 ) {
    console.log(`Após mil vendas você terá um prejuízo de R$${lucro},00`)
  } else {
    console.log('Você não obteve lucro nem prejuízo!')
  }
} else {
  console.log(`ERRO - algum desses dois valores "${valorDeCusto}" / "${valorDeVenda}" é "0" ou está abaixo, corrija antes de executar.`)
}