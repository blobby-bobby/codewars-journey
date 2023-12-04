// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.
// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

function productFib(prod){
    let fib1 = 0;
    let fib2 = 1;
    
    while (fib1 * fib2 < prod) {
      let fib3 = fib2
      fib2 = fib1 + fib2
      fib1 = fib3
    }
    
    return [fib1, fib2, fib1 * fib2 === prod]
}