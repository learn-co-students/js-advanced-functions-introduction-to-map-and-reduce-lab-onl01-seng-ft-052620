// Your code here

function mapToNegativize(array) {
    return array.map(i => i * -1)
}

function mapToNoChange(array) {
    return array.map(i => i)
}

function mapToDouble(array) {
    return array.map(i => i * 2)
}

function mapToSquare(array) {
    return array.map(i => i * i)
}

function reduceToTotal(array, startingPoint = 0) {
    let reducer = function(accumulator, currentValue) {
        return accumulator + currentValue
    }
    return array.reduce(reducer, startingPoint)
}

function reduceToAllTrue(array) {
    let reducer = function(accumulator, currentValue) {
        if(!!accumulator === true && !!currentValue === true) {
            return true;
        } else {
            return false;
        }
    }
    return array.reduce(reducer, true)
}

function reduceToAnyTrue(array) {
    let reducer = function(accumulator, currentValue) {
        if(accumulator === true) {
            return true
        } else {
            return !!currentValue
        }
    }
    return array.reduce(reducer, false)
}