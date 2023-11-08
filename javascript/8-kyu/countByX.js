// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(baseNum, multiplier) {
    let result = [];
    
    for (let i = 1; i <= multiplier; i++) {
      result.push(i * baseNum)
    }
  
    return result;
}