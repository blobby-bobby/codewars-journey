// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
    return friends.filter(friend => /^[a-zA-Z]{4}$/.test(friend))
}