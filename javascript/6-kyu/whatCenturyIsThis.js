// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript

function whatCentury(year) {
    let century = year.slice(2) !== "00" ? String(Number(year.slice(0,2)) + 1) : year.slice(0,2)
    let indicator = "th"
    
    if (century[0] !== "1" && century[1] === "1") {
      indicator = "st"
    } else if (century[0] !== "1" && century[1] === "2") {
      indicator = "nd"
    } else if (century[0] !== "1" && century[1] === "3") {
      indicator = "rd"
    }
    
    return century + indicator
}