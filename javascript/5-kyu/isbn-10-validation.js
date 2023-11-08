// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  
  let sum = 0
  
  if (!/[0-9]{9}[X0-9]{1}/.test(isbn) || isbn.length !== 10) {
    return false 
  } else {
    for (let i = 0; i < 10; i++) {
      
      if (isbn[i] === "X") {
        sum += (10 * (i + 1))
      } else {
        sum += parseInt(isbn[i] * (i + 1))
      }
    }
    
    return sum % 11 === 0
  }

}