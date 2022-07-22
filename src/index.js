
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr=[]
  if(matrix!==undefined){
     matrix.forEach((element,i)=>{
  i%2!==0?element.reverse():element;
       element.forEach((el)=>{
        arr.push(el)
       })
     })
  }
     return arr
}

