// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

// surely need to be shortened but so happy it passes the tests
const tribonacci = (signature,n) => {
    if (n === 0) {
      return []
    } else if (n === 1) {
      return signature.slice(0, 1)
    } 
    
    for (let i = 0; i < n - 3; i++) {
      let nextNum = signature.slice(i).reduce((a, b) => a + b)  
      signature.push(nextNum)
    }
    
    return signature
}

// shorter solution
// function tribonacci(signature,n){  
//     for (var i = 0; i < n-3; i++) { // iterate n times
//       signature.push(signature[i] + signature[i+1] + signature[i+2]); // no need of the conditions for low n value
//     }
//     return signature.slice(0, n);
// }