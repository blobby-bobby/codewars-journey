// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

// FIRST ATTEMPT
// const binaryArrayToNumber = arr => {
//     const binaryString = arr.join("");
//     return parseInt(binaryString, 2);
// };

// REFACTO
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2);
};