// Your code here
function mapToNegativize(arr){
    return arr.map(x => x*-1)
}

function mapToNoChange(arr){
    return arr
}

function mapToDouble(arr){
    return arr.map(x => x*2)
}

function mapToSquare(arr){
    return arr.map(x => x*x)
}

function reduceToTotal(arr,start=0){
    return arr.reduce((total, x) => total+x, start)
}


function reduceToAllTrue(arr){
    return arr.reduce((res,x) => res && !!x, true)
}

function reduceToAnyTrue(arr){
    return arr.reduce((res,x)=> res || !!x, false)
}