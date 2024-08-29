function permutations(string) {
  if (string.length === 1) return [string];

  const results = [];

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const remainingChar = string.slice(0, i) + string.slice(i + 1);

    for (let permut of permutations(remainingChar)) {
      results.push(currentChar + permut);
    }
  }

  // dirty hack to remove duplicates 🤫
  return Array.from(new Set(results));
}
