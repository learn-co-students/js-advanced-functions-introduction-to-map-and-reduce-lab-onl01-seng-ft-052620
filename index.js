function mapToNegativize(arr){
    return arr.map(i => i * -1)
}
function mapToNoChange(arr){
    return arr.map(i => i)
}

//Here are the map like ones
function mapToDouble(arr){
    let result = []
    arr.forEach(i => result.push(i * 2))
    return result
}
function mapToSquare(arr){
    let result = []
    arr.forEach(i => result.push(i ** 2))
    return result
}

function reduceToTotal(arr, start=0){
    arr.forEach(i => start += i)
    return start
}

function reduceToAllTrue(arr){
    return arr.every(item => !!item === true)

}
function reduceToAnyTrue(arr){
    return arr.some(item => !!item === true)

}
 
