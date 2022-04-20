const data = [4, 5, 2, 8, 4, 6, 9, 7, 5, 3, 1, 5];

function meuMap(calback) {
  const array = [...this];
  const result = [];

  for (let ind = 0; ind < array.length; ind++) {
    const element = array[ind];
    const retornoCalback = calback(element, ind, array);
    result.push(retornoCalback);
  }

  return result;
}

data.meuMap = meuMap;

const resultMeuMap = data.meuMap((element, ind) => {
  return element * 2;
});

const resultMap = data.map((element) => {
  return element * 2;
});

console.log(resultMeuMap);
console.log(resultMap);
