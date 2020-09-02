let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, - Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

function mensagem(posicao1, posicao2) {
  if (posicao1 == posicao2){
    return `Recorrentes`;
  } else {
    return `${posicao1} e ${posicao2}`;
  }
}

for (let key in info) {
  console.log(mensagem(info[key], info2[key]));
}