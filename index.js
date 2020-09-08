// Your code here
function mapToNegativize(mapp) {
    return mapp.map(n => n * -1)
}
function mapToNoChange(ne) {
    return ne
}

function mapToDouble(t) {

    return t.map(t => t * 2)
}

function mapToSquare(v) {
    return v.map(v => v * v)
}


function reduceToTotal(sourceArray, startingPoint=0){
    let x = startingPoint
    for (let i = 0; i <  sourceArray.length; i++) {
              x = x + sourceArray[i]

        }      
          return x

    }

function reduceToAllTrue(sourceArray){
   for(let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i] === true ){
            return false
        }
       
   }

            return true;


}
function reduceToAnyTrue(sourceArray) {

   for(let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i] === true ){
            return true
        }
       
   }

            return false;


}