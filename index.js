function mapToNegativize(sourceArray) {
    let result = []

    for (let i = 0; i < sourceArray.length; i++) {
        result.push(-sourceArray[i])
    }
    
    return result;
}

function mapToNoChange(sourceArray) {
    let result = []

    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i])
    }
    
    return result;
}

function mapToDouble(sourceArray) {
    let result = []

    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i]*2)
    }

    return result;
}

function mapToSquare(sourceArray) {
    let result = []

    for (let i = 0; i < sourceArray.length; i++) {
        result.push(Math.pow(sourceArray[i],2) )
    }

    return result;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let result = startingPoint

    for (let i = 0; i < sourceArray.length; i++) {
        result += sourceArray[i]
    }

    return result;
}

function reduceToAllTrue(sourceArray) {
    let result = true

    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            result = true
        } else {
            result = false
        }
    }

    return result;
}

function reduceToAnyTrue(sourceArray) {
    let result = true

    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            result = true
        } else {
            result = false
        }
    }

    return result;
}