/*
https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/javascript

Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

Adapted from Project Euler.
*/

function greatestProduct(input) {
    let result = [];
    
    for (let i = 0; i <= input.length - 5; i++) {
      const product = input.slice(i, i + 5).split("").reduce((a, b) => Number(a) * Number(b))
      result.push(product)
    }
    
    return Math.max(...result)
}