// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function(iterable) {
  
    let toArr = Array.isArray(iterable) ? iterable : iterable.split('');
    const result = []
    
    for (let i = 0; i < toArr.length; i++) {
      
      if (toArr[i] !== result[result.length - 1]) {
        result.push(toArr[i])
      }
    }
  
    return result

}

// Apparently this super short works =)

// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }