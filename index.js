// Your code here
function mapToNegativize(sourceArray) {
  let newArray = sourceArray.map(n => n * -1 )
  return newArray
}

function mapToNoChange(sourceArray) {
  let newArray = sourceArray.map(n => n)
  return newArray
}

function mapToDouble(sourceArray) {
  let newArray = sourceArray.map(n =>  n * 2)
  return newArray
}

function mapToSquare (sourceArray) {
  let newArray = sourceArray.map(n =>  Math.pow(n, 2))
  return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let newArray = sourceArray.reduce(function(total, element){
    return element + total
  }, startingPoint)
  return newArray
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}