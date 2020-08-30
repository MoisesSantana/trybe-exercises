let deUmAteVinteECinco = [];
let metadeDeUmAteVinteECinco = [];

for (let i = 1; i <= 25; i += 1) {
  deUmAteVinteECinco.push(i);
  //metadeDeUmAteVinteECinco.push(deUmAteVinteECinco[i-1] / 2); 
}
//console.log(metadeDeUmAteVinteECinco);
// Linha 6 e 8, jeito mais rápido
// Jeito que o exercício pede
for (let i = 0; i < deUmAteVinteECinco.length; i += 1) {
    metadeDeUmAteVinteECinco.push(deUmAteVinteECinco[i] / 2);
}
console.log(metadeDeUmAteVinteECinco);