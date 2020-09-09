// Your code here


function mapToNegativize(sourceArray) {
    return sourceArray.map(function(element){
        return element * -1
    })
}


function mapToNoChange(sourceArray) {
    return sourceArray.map(function(element) {
        return element
    })
}

function mapToDouble(sourceArray) {
    return sourceArray.map(element => element * 2)
}


function mapToSquare(sourceArray) {
    return sourceArray.map(element => element * element)
}


function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce(function(total, startingPoint){
        return total + startingPoint}, startingPoint)
}


function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((value, i) => !!value && !!i, true)
}


function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((value, i) => !!value || !!i, false)
}

