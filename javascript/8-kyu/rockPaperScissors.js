// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
    if (p1 === p2) {
      return 'Draw!';
    } else if (p1 === 'rock') {
      if (p2 === 'paper') {
        return 'Player 2 won!';
      } else {
        return 'Player 1 won!';
      }
    } else if (p1 === 'paper') {
      if (p2 === 'scissors') {
        return 'Player 2 won!';
      } else {
        return 'Player 1 won!';
      }
      } else if (p1 === 'scissors') {
      if (p2 === 'rock') {
        return 'Player 2 won!';
      } else {
        return 'Player 1 won!';
      }
    }
};