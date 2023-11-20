// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

const alphabetPosition = (text) => {
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    return text
      .toLowerCase() // all lowercase
      .replace(/[^a-zA-Z]/g, '') // remove special characters
      .split('') // into Array
      .map(num => alphabet.indexOf(num) + 1) // check match with alphabet and retrieve index
      .join(" "); // to String
}