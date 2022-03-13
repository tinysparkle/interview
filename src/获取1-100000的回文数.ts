/**
 * @description 数组方式
*/
function func1 (max: number): number[] {
  const arr: number[] = [];

  if (max <= 0) return arr;

  for (let i = 1; i <= max; i++) {
    const s = i.toString()
    if (s === s.split('').reverse().join('')) {
      arr.push(i)
    }
  }

  return arr
}

/**
 * @description 对比字符串
*/
function func2 (max: number): number[] {
  const arr: number[] = [];

  if (max <= 0) return arr;
  let startIndex = 0;
  let endIndex = max

  for (let i = 1; i <= max; i++ ) {
    const s = i.toString();
    const length = s.length;

    let startIndex = 0;
    let endIndex = length - 1;
    let flag = true

    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false
        break
      } else {
        startIndex++
        endIndex--
      }
    }
    if (flag) {
      arr.push(i)
    }
  }
  return arr
}

/**
 * @description 翻转数字
*/
function func3 (max: number): number[] {
  const arr: number[] = [];

  if (max <= 0) return arr;

  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0;
    // 123
    while (n > 0) {
      rev = rev * 10 + n % 10; // 321
      n = Math.floor(n / 10)
    }
    if (rev === i) {
      arr.push(i)
    }
  }

  return arr
}

console.log(func3(200))

export default {}