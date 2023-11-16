// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

const longestConsec = (strarr, k) => {

    let concats = [];
  
    for (let i = 0; i < strarr.length; i++) {
      concats.push(strarr.slice(i, i + k).join(''))
    }
  
    return k >= 1 && k < strarr.length ? concats.reduce(function (a, b) {
        return a.length > b.length ? a : a.length === b.length ? a : b;
    }, "") : ""

}