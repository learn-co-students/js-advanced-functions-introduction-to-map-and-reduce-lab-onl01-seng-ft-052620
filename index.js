function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x=> x * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
   return sourceArray.reduce((total, startingPoint) => {return total + startingPoint}, startingPoint)
}

function reduceToAllTrue(array){
    return array.reduce((value, i) => !!value && !!i, true)
}
function reduceToAnyTrue(array){
    return array.reduce((value, i) => !!value || !!i, false)
} 