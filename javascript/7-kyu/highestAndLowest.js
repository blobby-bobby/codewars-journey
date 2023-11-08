// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
    let nums = numbers.split(" ")
    return `${Math.max(...nums)} ${Math.min(...nums)}`
}