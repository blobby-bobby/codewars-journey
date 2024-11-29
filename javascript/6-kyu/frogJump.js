function solution(a) {
  const totalSum = a.reduce((sum, num) => sum + num, 0);
  if (totalSum === 0) return -1;
  if (a.length === 1 && a[0] !== 0) return 1;

  let numberOfJumps = 0;
  let i = 0;
  const visitedSpots = new Set();

  while (i >= 0 && i < a.length) {
    if (visitedSpots.has(i)) return -1;

    visitedSpots.add(i);

    if (a[i] === 0) return -1;

    i += a[i];
    numberOfJumps++;
  }

  return numberOfJumps;
}
