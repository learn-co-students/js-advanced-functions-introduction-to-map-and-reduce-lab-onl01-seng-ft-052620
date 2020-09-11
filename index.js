// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        newArray.push(element*(-1))
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        newArray.push(element)
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        newArray.push(element*2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        newArray.push(element**2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint) {
    let accumulator
    startingPoint ? ( accumulator = startingPoint) : (accumulator = 0 )
    for (const element of sourceArray) {
        accumulator += element
    }
    return accumulator
}

function reduceToAllTrue(sourceArray) {
    let isTruthy = true
    for (const element of sourceArray) {
        if (!element) {
            isTruthy = false
        }
    }
    return isTruthy
}

function reduceToAnyTrue(sourceArray) {
    let isTruthy = false
    for (const element of sourceArray) {
        if (element) {
            isTruthy = true
        }
    }
    return isTruthy
}
