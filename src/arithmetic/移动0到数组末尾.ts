/**
 * @description 方式一 嵌套循环方式
 * 时间复杂度O(n^2)
*/
// 改变原数组
function moveZero1(arr: number[]): void {
  let zeroLength = 0

  for (let i = 0; i < arr.length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      zeroLength++;
      i--
    }
  }
}

/**
 * @description 方式一 双指针方式
 * 时间复杂度O(n)
*/
function moveZero2 (arr: number[]): void {
  const length = arr.length;
  if (length === 0) return;

  let i; // 指向j后第一个非0的数
  let j = -1; // 指向第一个0

  for (i = 0; i < length; i++) {
    if (arr[i] === 0) {
      // 第一个0
      if ( j < 0) {
        j = i;
      }
    }

    if (arr[i] !== 0 && j >= 0) {
      // 交换
      const n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;
      j++
    }
  }
}
const arr1 = []
for (let i = 0; i < 10 * 10000; i++) {
  if (i % 10 === 0) {
    arr1.push(0)
  }
  arr1.push(i)
}
console.time('第一种方式')
moveZero2(arr1);
console.timeEnd('第一种方式')



const arr2: any = []
for (let i = 0; i < 10 * 10000; i++) {
  if (i % 10 === 0) {
    arr2.push(0)
  }
  arr2.push(i)
}
console.time('双指针')
moveZero2(arr2);
console.timeEnd('双指针')

export default {}
