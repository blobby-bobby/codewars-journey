// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    const sentence = string.toLowerCase().replace(/[^\w]/g, "").split('').sort()
    
    return alphabet.every(letter => sentence.includes(letter))
}