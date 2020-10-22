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

async function getResult() {
  try {
    const result = await produceArr();
    console.log(result)
  } catch(err) {
    console.log(err);
  }
};

getResult();