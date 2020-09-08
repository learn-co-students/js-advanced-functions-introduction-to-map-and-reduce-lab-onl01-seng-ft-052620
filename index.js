// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1)
}
function mapToNoChange(sourceArray){
    return sourceArray.map(function(array){
        return array
    })
}
function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2)
    
}
function mapToSquare(sourceArray){
    return sourceArray.map(x => x * x)
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;


function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce(reducer, startingPoint)
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
