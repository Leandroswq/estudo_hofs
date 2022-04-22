const data = [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2];

function meuEvery(calback) {
  const array = [...this];

  let result = true;

  for (let ind = 0; ind < array.length; ind++) {
    const element = array[ind];
    let aux = calback(element, ind, array);
    if (aux === false) {
      result = false;
      break;
    }
  }

  return result;
}

data.meuEvery = meuEvery;

const resultmeuEvery = data.meuEvery((element) => {
  return element === 2;
});

const resultFilter = data.every((element) => {
  return element === 2;
});

console.log("meuEvery", resultmeuEvery);
console.log("every", resultFilter);
