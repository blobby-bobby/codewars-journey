function uniqueSum(lst) {
  if (!lst.length) return null;
  let newLst = Array.from(new Set(lst));
  return newLst.reduce((a, b) => a + b, 0);
}
