// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    let result = 0;
    
    while(num > 9) {
      num = num.toString().split('').map(Number).reduce((a, b) => a * b)
      result++
    }
    
    return result
}