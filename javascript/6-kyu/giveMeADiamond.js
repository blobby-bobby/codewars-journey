// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n){
    let diamond = "";
    
    if (n % 2 === 0 || n < 0) return null // The diamond needs an odd value
    
    for (let i = 1; i <= n; i += 2) { // PART ONE - First half of diamond
      space = " ".repeat((n - i) / 2);
      star  = "*".repeat(i);
      
      diamond += `${space}${star}\n`
    };
    
    for (let i = n - 2; i >= 1; i -= 2) { // PART TWO - Second half of diamond
      space = " ".repeat((n - i) / 2);
      star  = "*".repeat(i);
      
      diamond += `${space}${star}\n`
    };
    
    return diamond
}

// OUTPUT FOR diamond(5)
/*
    *
   ***
  *****
 *******
  *****
   ***
    *
*/