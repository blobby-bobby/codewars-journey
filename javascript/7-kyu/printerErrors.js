// https://www.codewars.com/kata/56541980fa08ab47a0000040

const printerError = (s) => {
    return (s.match(/[^a-m]/g)?.length || 0) + "/" + s.length;
}