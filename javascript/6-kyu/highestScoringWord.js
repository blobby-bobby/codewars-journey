// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    const words = x.split(' ')
    let scores = {}
    
    for (let word of words) {
      let count = 0;
      
      for (let i = 0; i < word.length; i++) {
        count += word.charCodeAt(i) - 96
      }
      scores[word] = count
    }
    const max = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return max;
}