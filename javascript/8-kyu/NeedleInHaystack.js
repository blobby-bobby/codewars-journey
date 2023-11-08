// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
    if (haystack.includes("needle")) {
        return "found the needle at position " + haystack.indexOf("needle");    
    } else {
        return "Your function didn't return anything"
    }
}