// Your code here
function mapToNegativize(sourceArray) {
    const outputs = []
    sourceArray.forEach(element => {
        const negativized = element * -1
        outputs.push(negativized)
    })
    return outputs
}

function mapToNoChange(sourceArray) {
    const outputs = sourceArray
    return outputs
}

function mapToDouble(sourceArray) {
    const outputs = []
    sourceArray.forEach(element => {
        const doubled = element * 2
        outputs.push(doubled)
    })
    return outputs
}

function mapToSquare(sourceArray) {
    const outputs = []
    sourceArray.forEach(element => {
        const squared = element * element
        outputs.push(squared)
    })
    return outputs
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let newTotal = startingPoint
    sourceArray.forEach(element => {
        newTotal += element
    })
    return newTotal
}

function reduceToAllTrue(sourceArray) {
    let evaluates = true
    sourceArray.forEach(element => {
        if (element == false) {
            evaluates = false
        }
    })
    return evaluates
}

function reduceToAnyTrue(sourceArray) {
    let evaluates = false
    sourceArray.forEach(element => {
        if (element == true) {
            evaluates = true
        }
    })
    return evaluates
}