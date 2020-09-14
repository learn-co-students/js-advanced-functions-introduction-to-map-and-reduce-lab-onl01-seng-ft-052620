// Your code here
function mapToNegativize(sourceArray){
    var newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i]*-1)
    }
    return newArray
}

function mapToNoChange(sourceArray){
        var newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray    
}

function mapToDouble(sourceArray){
        var newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i]*2)
    }
    return newArray    
}

function mapToSquare(sourceArray){
        var newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i]**2)
    }
    return newArray    
}

function reduceToTotal(sourceArray, startingPoint = 0){
    for (let i = 0; i < sourceArray.length; i++){
        startingPoint += sourceArray[i]
    }

    return startingPoint
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i<sourceArray.length; i++){
        if (sourceArray[i] === false){
            return false
            break;
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i<sourceArray.length; i++){
        if (sourceArray[i] === true){
            return true
            break;
        }
    }
    return false
}