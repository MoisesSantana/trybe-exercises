const produceArr = () => {
  return new Promise((resolve, reject) => {
    const currentArr = [0,0,0,0,0,0,0,0,0,0];
    currentArr.forEach((element, index) => {
      const number = Math.round(Math.random() * 50 + 1);
      currentArr[index] = number**2;
    });
    const result = currentArr.reduce((sum, element) => sum + element);
    result <= 8000 ? resolve(result) : reject('O poder é mais de 8000');
  });
};

const divide = (value) => {
  return new Promise((resolve, reject) => {
    const currentArr = [2,3,5,10];
    currentArr.forEach((element, index) => currentArr[index] = (value / element).toFixed(2));
    resolve(currentArr);
  });
};

const sum = (arrValues) => {
  return new Promise((resolve, reject) => {
    resolve(arrValues.reduce((result, element) => parseFloat(result) + parseFloat(element)));
  });
};

async function getResult() {
  try {
    const resultEx2 = await produceArr();
    console.log(resultEx2);
    const resultEx3 = await divide(resultEx2);
    console.log(resultEx3);
    const resultEx5 = await sum(resultEx3);
    console.log(resultEx5);
  } catch(err) {
    console.log(err);
  }
};

getResult();
