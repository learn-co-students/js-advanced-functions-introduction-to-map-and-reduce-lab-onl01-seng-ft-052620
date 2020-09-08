// Your code here
function mapToNegativize(array){
    return array.map(element => element * -1)
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    return array.map(e => e * 2)
}
function mapToSquare(array){
    return array.map(e => e * e)
}
function reduceToTotal(array, start = 0){
  return array.reduce((total, start) => {return total + start}, start)
}
function reduceToAllTrue(array){
    return array.reduce((value, i) => !!value && !!i, true)
}
function reduceToAnyTrue(array){
    return array.reduce((value, i) => !!value || !!i, false)
}