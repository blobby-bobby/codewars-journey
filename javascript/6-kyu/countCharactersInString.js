// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
    let result = {};
    const sortString = string.split("").sort().join("");
    let count = 1
    
    for (let i = 0; i < sortString.length; i++) {
  
      if (i > 0 && sortString[i] === sortString[i - 1]) {
          count += 1
          result[sortString[i]] = count;
      } else {
          count = 1
          result[sortString[i]] = count;
      }
    }
    
    return result
  }