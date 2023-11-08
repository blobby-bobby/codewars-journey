// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = (busStops) => {
    var people = 0;
    for (let stop of busStops) {
      people += stop[0] - stop[1];
    }
    return people;
};