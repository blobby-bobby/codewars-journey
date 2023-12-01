// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// First time I used continue, super happy, good to know =)

function wave(str) {
    let mexicanBase = str.toLowerCase();
    let result = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        continue
      } else {
        result.push(
            mexicanBase
              .split("")
              .map((letter, index) => (index === i ? letter.toUpperCase() : letter))
              .join('')
        );
      }
    }
  
    return result;
}