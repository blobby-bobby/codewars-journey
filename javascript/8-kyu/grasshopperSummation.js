// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = (number) => {
    let result = 0;
    
    for (let num = 1; num <= number; num++) {
      result += num
    }
    return result
}