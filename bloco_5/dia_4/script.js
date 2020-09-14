window.onload = function () {
  const main = document.querySelector('section');
  const article = document.querySelector('article');
  const buttons = document.querySelectorAll('button');

  const backgroundForms = document.querySelector('#background-color-forms');

  const backgroundBlack = document.querySelector('#background-black');
  const backgroundWhite = document.querySelector('#background-white');
  const backgroundRed = document.querySelector('#background-red');
  const backgroundGreen = document.querySelector('#background-green');
  const backgroundBlue = document.querySelector('#background-blue');

  const textColorForms = document.querySelector('#text-color-forms');

  const textBlack = document.querySelector('#text-black');
  const textWhite = document.querySelector('#text-white');
  const textRed = document.querySelector('#text-red');
  const textGreen = document.querySelector('#text-green');
  const textBlue = document.querySelector('#text-blue');

  const sizeForms = document.querySelector('#font-size-forms');

  const smallSize = document.querySelector('#font-small');
  const mediumSize = document.querySelector('#font-medium');
  const largeSize = document.querySelector('#font-large');
  const largerSize = document.querySelector('#font-larger');
  const xxLargeSize = document.querySelector('#font-xx-large');

  const familyForms = document.querySelector('#font-family-forms');

  const serif = document.querySelector('#family-serif');
  const sans = document.querySelector('#family-sans-serif');
  const monospace = document.querySelector('#family-monospace');

  const lineHeight = document.querySelector('#line-height-forms');

  const sizeLineHeight = document.querySelector('#size-line-height');

  buttons[0].addEventListener('click', function () {
    backgroundForms.style.display = 'block';
  });

  backgroundBlack.addEventListener('click', function () {
    article.style.backgroundColor = 'black';
    backgroundForms.style.display = 'none';
  });

  backgroundWhite.addEventListener('click', function () {
    article.style.backgroundColor = 'white';
    backgroundForms.style.display = 'none';
  });

  backgroundRed.addEventListener('click', function () {
    article.style.backgroundColor = 'red';
    backgroundForms.style.display = 'none';
  });

  backgroundGreen.addEventListener('click', function () {
    article.style.backgroundColor = 'green';
    backgroundForms.style.display = 'none';
  });

  backgroundBlue.addEventListener('click', function () {
    article.style.backgroundColor = 'blue';
    backgroundForms.style.display = 'none';
  });

  buttons[1].addEventListener('click', function () {
    textColorForms.style.display = 'block';
  });

  textBlack.addEventListener('click', function () {
    article.style.color = 'black';
    textColorForms.style.display = 'none';
  });

  textWhite.addEventListener('click', function () {
    article.style.color = 'white';
    textColorForms.style.display = 'none';
  });

  textRed.addEventListener('click', function () {
    article.style.color = 'red';
    textColorForms.style.display = 'none';
  });

  textGreen.addEventListener('click', function () {
    article.style.color = 'green';
    textColorForms.style.display = 'none';
  });

  textBlue.addEventListener('click', function () {
    article.style.color = 'blue';
    textColorForms.style.display = 'none';
  });

  buttons[2].addEventListener('click', function () {
    sizeForms.style.display = 'block';
  });
  
  smallSize.addEventListener('click', function () {
    article.style.fontSize = 'small';
    sizeForms.style.display = 'none'
  });

  mediumSize.addEventListener('click', function () {
    article.style.fontSize = 'medium';
    sizeForms.style.display = 'none'
  });

  largeSize.addEventListener('click', function () {
    article.style.fontSize = 'large';
    sizeForms.style.display = 'none'
  });

  largerSize.addEventListener('click', function () {
    article.style.fontSize = 'larger';
    sizeForms.style.display = 'none'
  });

  xxLargeSize.addEventListener('click', function () {
    article.style.fontSize = 'xx-large';
    sizeForms.style.display = 'none';
  });

  //TA RESETANDO VALOR
  buttons[3].addEventListener('click', function () {
    lineHeight.style.display = 'block';
  });

  sizeLineHeight.addEventListener('keyup', function () {
    let currentSize = sizeLineHeight.value;
    article.style.lineHeight = currentSize + 'px';
  });
  //ATE AQUI

  buttons[4].addEventListener('click', function () {
    familyForms.style.display = 'block';
  });

  serif.addEventListener('click', function () {
    article.style.fontFamily = 'serif';
    familyForms.style.display = 'none';
  });

  sans.addEventListener('click', function () {
    article.style.fontFamily = 'sans';
    familyForms.style.display = 'none';
  });

  monospace.addEventListener('click', function () {
    article.style.fontFamily = 'monospace';
    familyForms.style.display = 'none';
  });
}