// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = (num) => {
    let result = "";
    for(let count = 1; count <= num; count++) {
      result += count.toString() + " sheep...";
    }
    return result;
}