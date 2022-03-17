/**
 * 0.3 - 0.1 = 0.199999
 * 0.2 + 0.1 = 0.300000000000004
 * @description 在js中小数相加或者相减，会出现精度问题
 * 解题思路： 将小数变成整数进行相加，然后再让它变成小数输出，注意substr获取到的下标需要向前 +1 位
*/

// 获取小数点位数
const getPointLens = (num: number) => {
  // 如果是整数
  if (Math.floor(num) === num) {
    return 0
  }

  const index = String(num).indexOf('.');
  const len = String(num).substr(index + 1).length;
  return len;
}

const calc = (num1: number, num2: number, type: string) => {
  let result;
  // 获取位数
  const num1Len = getPointLens(num1);
  const num2Len = getPointLens(num2);

  // 取最大位数
  const maxLen = num1Len > num2Len ? num1Len : num2Len;

  // 取整倍数
  const maxTimes = Math.pow(10, maxLen)

  if (type === 'plus') { // 加法运算
    result = (num1 * maxTimes + num2 * maxTimes) / maxTimes;
  } else if (type === 'minus'){
    result = (num1 * maxTimes - num2 * maxTimes) / maxTimes;
  }

  return result;
}

// console.log(0.1 + 0.2)
// console.log('calc(0.1,0.2,"plus"): ', calc(0.1,0.2,'plus'));
console.log(0.3 - 0.2)
console.log('calc(0.3, 0.2 , "minus"): ', calc(0.3, 0.2 , 'minus'));