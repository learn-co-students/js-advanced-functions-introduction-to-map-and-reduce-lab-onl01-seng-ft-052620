// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(i => i * -1)
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(i => i)
}

function mapToDouble(sourceArray) {
  return sourceArray.map(i => i * 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map(i => i ** 2)
}

function reduceToTotal(sourceArray, startingPoint=0) {
  sourceArray.forEach(i => startingPoint += i)
  return startingPoint
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.every(i => !!i === true)
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.some(i => !!i === true)
}


