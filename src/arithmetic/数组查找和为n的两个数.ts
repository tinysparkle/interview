/**
 * @description 递增数组找出和为n的两个数
 * 双指针实现
*/

function findTwoNums1 (array: number[], target: number) {
  const list: number[] = [];
  const length = array.length;
  if (length === 0) return list;

  let i = 0,
      j = length - 1;
    
  while (i <= j) {
    const num1 = array[i];
    const num2 = array[j];
    const n = num1 + num2;
    
    if (target > n) {
      i++
    } else if (target <  n) {
      j--
    } else {
      list.push(num1);
      list.push(num2)
      break // 找到就跳出循环！
    }
  }

  return list
}

/**
 * @description 乱序数组找出和为n的两个数
 * map实现
*/
function findTwoNums2 (array: number[], target: number) {
  const list: number[] = []
  const length = array.length;
  if (length === 0) return list;
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    const val = target - array[i];
    if (map.has(val)) {
      list.push(array[map.get(val)])
      list.push(array[i])
      return list
    }

    map.set(array[i], i)
  }
  return list
}


const arr = [10, 5, 40, 15, 80]

const res = findTwoNums2(arr, 45)
console.log('res: ', res);
export default {}