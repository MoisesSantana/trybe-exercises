const n = 5;

function sum(num) {
  let result = '';
  let aux = 0;
  for (let i = 1; i <= num; i += 1) {
    aux += i;
    i == 5 ? result += `${i} ` : result += `${i} + `;
  }
  return result += `= ${aux}`;
}

console.log(sum(n));
