let pecaDeXadrez = 'Sou Tryber';
let pecaDeXadrezLowerCase = pecaDeXadrez.toLocaleLowerCase();

switch(pecaDeXadrezLowerCase) {
    case 'rei':
        console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.')
        break;
    case 'rainha':
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.')
        break;
    case 'bispo':
        console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.')
        break;
    case 'cavalo':
        console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.')
        break;
    case 'torre':
        console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.')
        break;
    case 'peao':
        console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.')
        break;
    default:
        console.log('Não identificamos a peça veja se é um dos movimentos especiais')

        console.log('Roque - O roque é um movimento de defesa especial em que pode-se mover o rei e a torre do mesmo jogador ao mesmo tempo. Para realizar este movimento deve-se seguir as seguintes condições - "1"- Nem o rei nem a torre podem ter sido movidos antes de rocar - "2" - Não há nenhuma peça entre o rei e a torre. - "3" - O rei não está em xeque e as casas por onde passará não devem estar atacadas pelo adversário (as casas laterais em direção à torre).')
        
        console.log('Promoção do peão - Se o peão chegar até a última fila, o jogador poderá trocá-lo por qualquer peça que desejar, exceto pelo rei ou por outro peão.')

        console.log('Captura do peão - Se um peão contrário se deslocar 2 casas (seu primeiro movimento) e ficar ao lado de um dos seus peões, você poderá capturá-lo movendo o seu peão uma casa na diagonal.')
}
