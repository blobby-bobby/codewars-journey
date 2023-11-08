// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	const mumble = s.toLowerCase().split('')
  const result = []
  
  for (let i = 1; i <= mumble.length; i++) {
    result.push(
      Array(i).fill(mumble[i - 1])
      .join('')
    )
  }
  
  return result.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    
    return firstLetter + rest
  }).join('-')
}