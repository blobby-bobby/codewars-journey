// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

const order = (words) => {
  
    let sortOut = words.split(' ')
    let result = []
    
    for (let i = 1; i <= sortOut.length; i++) {
      let nextWord = sortOut.find(word => word.includes(i))
      result.push(nextWord)
    }
    
    return result.join(" ")
}