let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function mensagem(nome) {
  return `Bem vinda, ${nome.personagem}`
}

console.log(mensagem(info));