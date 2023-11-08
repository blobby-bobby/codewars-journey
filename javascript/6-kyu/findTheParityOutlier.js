// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
    const odds = []
    const evens = []
    
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        odds.push(integers[i])
      } else {
        evens.push(integers[i])
      }
    }
    
    if (odds.length > evens.length) {
      return evens[0]
    } else {
      return odds[0]
    }
}