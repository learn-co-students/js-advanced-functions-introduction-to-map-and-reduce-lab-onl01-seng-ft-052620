// Your code here
function mapToNegativize(sourceArray){
    const newArray = [];
    for(const num of sourceArray){
        newArray.push(num * -1)
    }
    return newArray
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    const newArray = [];
    for(const num of array){
        newArray.push(num * 2)
    }
    return newArray
}

function mapToSquare(ary){
    const newAry = [];
    for(const num of ary){
        newAry.push(num * num)
    }
    return newAry
}


function reduceToTotal(src, current = 0){
    for(const num of src){
        current += num
    }
    return current
}

function reduceToAllTrue(ary){
    let bananas = true 
    ary.forEach(element => {
        if (element == false) {
            bananas = false
        }
    })
    return bananas
}

function reduceToAnyTrue(ary){
    let bananas = false 
    ary.forEach(element=> {
        if (element == true){
            bananas = true
        }
    })
    return bananas
}
