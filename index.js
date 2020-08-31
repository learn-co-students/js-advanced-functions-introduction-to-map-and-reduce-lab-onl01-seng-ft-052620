// Your code here

function mapToNegativize (array){
    let changedArray = []
    for (let i=0; i<array.length; i++){
        let number = array[i]* -1
        changedArray.push(number)
    }
    return changedArray
}

function mapToNoChange(array){
    let changedArray = array
    return changedArray
}

function  mapToDouble(array){
    let changedArray = []
    for (let i=0; i<array.length; i++){
        let number = array[i]* 2
        changedArray.push(number)
    }
    return changedArray
}

function mapToSquare(array){
    let changedArray = []
    for (let i=0; i<array.length; i++){
        let number = array[i]**2
        changedArray.push(number)
    }
    return changedArray
}

function reduceToTotal(array, start=0){
    let total = start
    
    for (let i=0; i<array.length; i++){
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array){
    let total = true
    
    for (let i=0; i<array.length; i++){
        if (!!array[i] === false){
        total= false}
    }
    return total
}

function reduceToAnyTrue (array){
    let total = false
    
    for (let i=0; i<array.length; i++){
        if (!!array[i] === true){
        total= true}
    }
    return total
}