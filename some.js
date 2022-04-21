const data = [4,5,2,8,4,6,9,7,5,3,1,5]

function meuSome(calback){
    const array = [...this]

    let result = false

    for (let ind = 0; ind < array.length; ind++) {
        const element = array[ind];
        let aux = calback(element, ind, array)
        if(aux === true){
            result = true
            break
        }
    }

    return result
}

data.meuSome = meuSome

const resultmeuSome = data.meuSome((element) => {
    return element === 2
})

const resultFilter = data.some((element) => {
    return element === 2

})

console.log('meuSome' , resultmeuSome);
console.log('some', resultFilter);