const checkScope = () => {
  let i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log(`Block scope i is: ${i}`);
  }
  i = 'function scope';
  return i;
}
