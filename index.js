// Your code here
function mapToNegativize(sourceArray){
    let negativeArray = [];
    for(const element of sourceArray){
        negativeArray.push(-element)
    }
    return negativeArray;
}
function mapToNoChange(sourceArray){
    let duplicateArray = [];
    for(const element of sourceArray){
        duplicateArray.push(element)
    }
    return duplicateArray;
}

function mapToDouble(sourceArray){
    let doubleArray = [];
    for(const element of sourceArray){
        doubleArray.push((element * 2))
    }
    return doubleArray;
}

function mapToSquare(sourceArray){
    let squareArray = [];
    for(const element of sourceArray){
        squareArray.push((element ** 2))
    }
    return squareArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for(const element of sourceArray){
        total += element;
    }
    return total;
}

function reduceToAllTrue(sourceArray){
    for(const element of sourceArray){
        if (element === false){
            return false
        } 
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for(const element of sourceArray){
        if (element === true){
            return true
        } 
    }
    return false
}