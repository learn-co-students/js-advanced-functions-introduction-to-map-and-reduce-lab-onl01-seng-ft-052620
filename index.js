// Your code here
//my own map-like methods
//mapToNegativize returns an array with all values made negative
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
}

//mapToNoChange returns an array with the original values
function mapToNoChange(sourceArray) {
    return sourceArray
}

// mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
}

// mapToSquare returns an array with the original values squared
function mapToSquare(sourceArray) {
    return sourceArray.map(x => x**2)
}

// my own reduce-like methods
// reduceToTotal returns a running total when not given a starting point
// reduceToTotal returns a running total when given a starting point
function reduceToTotal(sourceArray, startingPoint=0) {
    for(const s of sourceArray){
        startingPoint += s
    }
    return startingPoint
}

// returns true when all values are truthy
// returns false when any value is falsy
function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc && Boolean(val))
}

// returns true when a true value is present
// returns false when no true value is present
function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc || Boolean(val))

}
