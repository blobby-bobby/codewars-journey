// https://codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// Managed to solve it with just a map function

var number = function(array){
    return array.map((letter, index) => {
      return letter = `${index + 1}: ${letter}`
    })
}