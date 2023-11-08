// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  
    let notZero = []
    let zeros = []
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(arr[i])
      } else {
        notZero.push(arr[i])
      }
    }
    
    const result = notZero.concat(zeros)
    
    return result
}