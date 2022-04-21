const data = [4,5,2,8,4,6,9,7,5,3,1,5]

function meuFilter(calback){
    const array = [...this]

    const result = []

    for (let ind = 0; ind < array.length; ind++) {
        const element = array[ind];
        let aux = calback(element, ind, array)
        if(aux === true){
            result.push(element)
        }
    }

    return result
}

data.meuFilter = meuFilter

const resultMeuFilter = data.meuFilter((element) => {
    return element % 2 != 0
})

const resultFilter = data.filter((element) => {
    return element % 2 != 0

})

console.log('meufilter' , resultMeuFilter);
console.log('filter', resultFilter);