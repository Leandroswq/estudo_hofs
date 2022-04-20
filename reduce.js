const data = [4, 5, 2, 8, 4, 6, 9, 7, 5, 3, 1, 5];

function meuReduce(calback, acc) {
  const array = [...this];
  let acumulador = acc
  if(acc === undefined){
      acumulador = array[0]
  }
  for (let ind = acc !== undefined? 0: 1 ; ind < array.length; ind++) {
    const element = array[ind];
    const prev = acumulador
    const retornoCalback = calback(prev, element, ind,array);
    acumulador = retornoCalback
  }

  return acumulador;
}

data.meuReduce = meuReduce;

const resultmeuReduce = data.meuReduce((prev, item) => {
    const obj = {}
    obj.sum = prev.sum + item
    obj.sub = prev.sub - item
    obj.mult = prev.mult * item    
    return obj
}, {sum: 0, sub: 0, mult: 1});

const resultReduce= data.reduce((prev, item) => {
    const obj = {}
    obj.sum = prev.sum + item
    obj.sub = prev.sub - item
    obj.mult = prev.mult * item
    return obj
}, {sum: 0, sub: 0, mult: 1})

console.log(resultmeuReduce);
