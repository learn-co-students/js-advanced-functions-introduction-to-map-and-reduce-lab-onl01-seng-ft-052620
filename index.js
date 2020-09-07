// Your code here
function mapToNegativize(ary){
    const newAry = [];
    for(const num of ary){
        newAry.push(num * -1)
    }
    return newAry
}

function mapToNoChange(ary){
    return ary
}

function mapToDouble(ary){
    const newAry = []
    for(const num of ary){
        newAry.push(num * 2)
    }
    return newAry
}
  

function mapToSquare(ary) {
    let newAry = []
    for (const num of ary) {
        newAry.push(num * num)
    }
       return newAry
   }
  
function reduceToTotal(ary, current = 0){
    for(const num of ary){
    current += num
    }
    return current
}


  
function reduceToAllTrue(ary) {
    let pickles = true
    ary.forEach(element => {
        if (element == false) {
            pickles = false
        }
    })
    return pickles
}

function reduceToAnyTrue(ary) {
    let iseeyou = false
    ary.forEach(element => {
        if (element == true) {
           iseeyou = true
        }
    })
    return iseeyou
} 

  