/**
 * @description 递增数组找出和为n的两个数
 * 时间复杂度o(n^2)
*/

function findTwoNums1 (array: number[], target: number) {
  const arr: number[] = []
  const length = array.length;
  if (length === 0) return arr

  for (let i = 0;  i < length - 1; i++) {
    let flag = false;
    const num1 = array[i]

    for (let j = i + 1; j < length; j++) {
      const num2 = array[j];
      if (target === num1 + num2) {
        flag = true
        arr.push(num1)
        arr.push(num2)
        break
      }
    }

    if (flag) break;
  }

  return arr
}


/**
 * @description 双指针实现
*/

function findTwoNums2 (array: number[], target: number) {
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


const arr = [10, 30, 40, 50, 80]

const res = findTwoNums2(arr, 40)
export default {}