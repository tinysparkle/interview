/**
 * @description 数组方式
 * 10124220 -> 10，124，220
*/
function format1(num: number) {
  const n = Math.floor(num);

  const s = n.toString();
  const arr = s.split('').reverse(); // [0, 2, 2, 4, 2, 1, 0, 1]
  return arr.reduce((pre, cur, index) => {
    if (index % 3 === 0) {
      if (pre) {
        return cur + ',' + pre
      } else {
        // 因为 0 % 3 = 0， 直接返回0就好了。这里0指的是索引
        return cur
      }
    } else {
      return cur + pre
    }
  }, '')
}

/**
 * @description 实现reduce
*/
// Array.prototype.reduce = reduce2
function reduce2 (cb: Function, pre?: any) {
  const arr: any[] = this;
  if (pre == null) {
    pre = arr[0]
    for (let i = 1; i < arr.length; i++) {
      pre = cb(pre, arr[i], i, arr)
    }
  } else {
    arr.forEach((item, index) => {
      pre = cb(pre, item, index, arr)
    })
  }
  return pre
}
console.log(format1(10124220))
