const data = [4,5,2,8,4,6,9,7,5,3,1,5]

function meuForeach(calback){
    const array = [...this]

    for (let ind = 0; ind < array.length; ind++) {
        const element = array[ind];
        calback(element, ind, array)

    }
}

data.meuForeach = meuForeach

data.meuForeach((element, ind) => {
    console.log('calback', ind)
})

const novoArray = []
data.forEach((element, ind) => {
    element.innerText = ind
})

console.log('novo array' , novoArray);