// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

const findUniq = (arr) => {
    arr.sort((a, b) => a - b)
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
}