const button = document.querySelector('button');
let count = 0;

button.addEventListener('click', () => {
  count += 1;
  button.innerText = count;
});