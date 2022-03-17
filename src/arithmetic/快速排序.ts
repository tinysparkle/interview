/**
 * @description 快排
*/
function quickSort (arr: number[]): number[] {
  const length = arr.length;
  if (length === 0) return []

  const midIndex = Math.floor(length / 2);
  const midVal = arr[midIndex]

  const leftArr = [];
  const rightArr = []

  for (let i = 0; i < length; i++) {
    const n = arr[i]

    if (i !== midIndex) {
      if (n < midVal) {
        leftArr.push(n)
      } else if (n > midVal) {
        rightArr.push(n)
      }

    }
  }

  return quickSort(leftArr).concat([midVal], quickSort(rightArr))
}

const arr = [2, 3, 1, 7, 5, 9, 0];
const res = quickSort(arr);
console.log('res: ', res);

export default {}