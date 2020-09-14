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
    localStorage.setItem('background', 'black');
    article.style.backgroundColor = localStorage.getItem('background');
    backgroundForms.style.display = 'none';
  });

  backgroundWhite.addEventListener('click', function () {
    localStorage.setItem('background', 'white');
    article.style.backgroundColor = localStorage.getItem('background');
    backgroundForms.style.display = 'none';
  });

  backgroundRed.addEventListener('click', function () {
    localStorage.setItem('background', 'red');
    article.style.backgroundColor = localStorage.getItem('background');
    backgroundForms.style.display = 'none';
  });

  backgroundGreen.addEventListener('click', function () {
    localStorage.setItem('background', 'green');
    article.style.backgroundColor = localStorage.getItem('background');
    backgroundForms.style.display = 'none';
  });

  backgroundBlue.addEventListener('click', function () {
    localStorage.setItem('background', 'blue');
    article.style.backgroundColor = localStorage.getItem('background');
    backgroundForms.style.display = 'none';
  });

  buttons[1].addEventListener('click', function () {
    textColorForms.style.display = 'block';
  });

  textBlack.addEventListener('click', function () {
    localStorage.setItem('text', 'black');
    article.style.color = localStorage.getItem('text');
    textColorForms.style.display = 'none';
  });

  textWhite.addEventListener('click', function () {
    localStorage.setItem('text', 'white');
    article.style.color = localStorage.getItem('text');
    textColorForms.style.display = 'none';
  });

  textRed.addEventListener('click', function () {
    localStorage.setItem('text', 'red');
    article.style.color = localStorage.getItem('text');
    textColorForms.style.display = 'none';
  });

  textGreen.addEventListener('click', function () {
    localStorage.setItem('text', 'green');
    article.style.color = localStorage.getItem('text');
    textColorForms.style.display = 'none';
  });

  textBlue.addEventListener('click', function () {
    localStorage.setItem('text', 'blue');
    article.style.color = localStorage.getItem('text');
    textColorForms.style.display = 'none';
  });

  buttons[2].addEventListener('click', function () {
    sizeForms.style.display = 'block';
  });
  
  smallSize.addEventListener('click', function () {
    localStorage.setItem('size', 'small');
    article.style.fontSize = localStorage.getItem('size');
    sizeForms.style.display = 'none'
  });

  mediumSize.addEventListener('click', function () {
    localStorage.setItem('size', 'medium');
    article.style.fontSize = localStorage.getItem('size');
    sizeForms.style.display = 'none'
  });

  largeSize.addEventListener('click', function () {
    localStorage.setItem('size', 'large');
    article.style.fontSize = localStorage.getItem('size');
    sizeForms.style.display = 'none'
  });

  largerSize.addEventListener('click', function () {
    localStorage.setItem('size', 'larger');
    article.style.fontSize = localStorage.getItem('size');
    sizeForms.style.display = 'none'
  });

  xxLargeSize.addEventListener('click', function () {
    localStorage.setItem('size', 'xx-large');
    article.style.fontSize = localStorage.getItem('size');
    sizeForms.style.display = 'none';
  });

  buttons[3].addEventListener('click', function () {
    lineHeight.style.display = 'block';
  });

  sizeLineHeight.addEventListener('keyup', function () {
    localStorage.setItem('height', sizeLineHeight.value);
    article.style.lineHeight = localStorage.getItem('height') + 'px';
  });

  buttons[4].addEventListener('click', function () {
    familyForms.style.display = 'block';
  });

  serif.addEventListener('click', function () {
    localStorage.setItem('family', 'serif');
    article.style.fontFamily = localStorage.getItem('family');
    familyForms.style.display = 'none';
  });

  sans.addEventListener('click', function () {
    localStorage.setItem('family', 'sans');
    article.style.fontFamily = localStorage.getItem('family');
    familyForms.style.display = 'none';
  });

  monospace.addEventListener('click', function () {
    localStorage.setItem('family', 'monospace');
    article.style.fontFamily = localStorage.getItem('family');
    familyForms.style.display = 'none';
  });

  article.style.backgroundColor = localStorage.getItem('background');
  article.style.color = localStorage.getItem('text');
  article.style.fontSize = localStorage.getItem('size');
  article.style.lineHeight = localStorage.getItem('height') + 'px';
  article.style.fontFamily = localStorage.getItem('family');
}
