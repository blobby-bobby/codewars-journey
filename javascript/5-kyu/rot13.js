// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

function rot13(str) {
    let toROT13 = str.split(' ');
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    
    return str.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
}