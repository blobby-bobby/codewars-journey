// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function(size) {
    let result = []
    
    for (let i = 1; i <= size; i++) {
      let table = []
      
      for (let j = 1; j <= size; j++) {
        table.push(j * i)
      }
      result.push(table)
    }
    return result
}