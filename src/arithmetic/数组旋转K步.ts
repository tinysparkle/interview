function rotateArr (arr: number[], k: number): number[] {
  if (!k) return arr;
  const step = Math.abs(k%arr.length);
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, arr.length - step);
  const res = part1.concat(part2);
  return res;
}
const res = rotateArr([1,2,3,4,5,6,7], 0)
console.log(res)

export default {}