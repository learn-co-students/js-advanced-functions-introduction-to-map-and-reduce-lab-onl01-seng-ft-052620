// Your code here
function mapToNegativize(sourceArray){
    // return sourceArray.map(x => x * -1)
    let newArray = []
    for (let i=0; i<sourceArray.length; i++){
    let num = sourceArray[i] * -1
    newArray.push(num)
    }
    return newArray
}
function mapToNoChange(sourceArray){
    // return sourceArray.map(function(array){
    //     return array
    // })
    let newArray = sourceArray
    return newArray
}
function mapToDouble(sourceArray){
    // return sourceArray.map(x => x * 2)
    let newArray = []
    for (let i=0; i<sourceArray.length; i++) {
        let num = sourceArray[i] * 2
        newArray.push(num)
    }
    return newArray
}
function mapToSquare(sourceArray){
    // return sourceArray.map(x => x * x)
    let newArray = []
    for (let i=0; i<sourceArray.length; i++) {
        let num = sourceArray[i] ** 2
        newArray.push(num)
    }
    return newArray
}
// const reducer = (accumulator, currentValue) => accumulator + currentValue;


function reduceToTotal(sourceArray, startingPoint=0){
    // return sourceArray.reduce(reducer, startingPoint)
    let total = startingPoint
    for (let i=0; i<sourceArray.length; i++){
        total += sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i])
        return false 
    } 
        return true 
}
// 
function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i])
        return true 
    } 
        return false 
}
