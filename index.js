function mapToNegativize(ary){
  const newAry = [];
  for (const num of ary){
    newAry.push(num*-1);
  }
  return newAry;
}

function mapToNoChange(ary){return ary}

function myOwnMap(ary, mapFn){
  const newAry = [];
  for (const num of ary){
    newAry.push(mapFn(num));
  }
  return newAry;
}

function mapToDouble(ary){
  return myOwnMap(ary, (num)=> num*2)
}

function mapToSquare(ary){
  return myOwnMap(ary, (num)=> num**2)
}

function reduceToTotal(ary, memo=0){
  for (const num of ary){
    memo += num;
  }
  return memo;
}

function myOwnReduce(ary, reduceFn, memo){
  let newMemo = memo;
  for (const element of ary){
    newMemo = reduceFn(element, newMemo)
  }
  return newMemo
}

function reduceToAllTrue(ary){
  let memo = true;
  return myOwnReduce(ary, 
    function(element, memo){if(memo==true){return !!element}},
    true 
  )
}

function reduceToAnyTrue(ary){
  let memo = false;
  const anyFn = function(element, memo){
    if(!memo){
      return !!element;
    }
  }
  return myOwnReduce(ary, anyFn, false)
}

