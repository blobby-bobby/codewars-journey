// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    let space, star, tower = [];
    
    for (i = 1; i <= nFloors; i++) {
      
      space = " ".repeat(nFloors - i);
      star  = "*".repeat((2 * i) - 1);
      tower.push(`${space}${star}${space}`);
      
    }
    
    return tower;
}