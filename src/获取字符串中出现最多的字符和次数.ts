// 两种方式时间复杂度基本没有差别 o(n)

interface IRes {
  char: string
  count: number
}

/**
 * @description 双指针
*/
function findStr3 (str: string): IRes {
  const res: IRes = {
    char: '',
    count: 0
  }
  const length = str.length;
  if (length === 0) return res;
  
  let i;
  let j = 0
  let count = 0
  for (i = 0; i < length; i++) {
    if (str[i] === str[j]) {
      count++;
    }
    if (str[i] !== str[j] || i === length - 1) {
      if (count > res.count ) {
        res.char = str[j]
        res.count = count
      }
      count = 0
      if (i < length - 1) {
        j = i;
        i--
      }
    }
  }

  return res
}

function findStr2 (str: string): IRes {
  const res: IRes = {
    char: '',
    count: 0
  } 
  const length = str.length;
  if (length === 0) return res

  let j = 0;
  let count = 0; // 记录长度

  for (let i = 0; i < length; i++) {
    if (str[i] === str[j]) {
      count++
    }
    if (str[i] !== str[j]) {
      if (count > res.count) {
        res.char = str[j];
        res.count = count;
      }
      count = 0;

      if (i < length - 1) { //如果i不是最后一个
        j = i; // 让j追上i
        i--
      }
    }
  }

  return res
}



/**
 * @description 嵌套循环
*/
function findStr1 (str: string): IRes {
  const res: IRes = {
    char: '',
    count: 0
  }

  const length = str.length;
  if (length === 0) return res;

  for (let i = 0; i < length; i++) {
    let tempCount = 0
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempCount++
      }

      if (str[i] !== str[j]) {
        if (tempCount > res.count) {
          res.char = str[i];
          res.count = tempCount
        }
        if (i < length - 1) {
          i = j - 1
        }
        break;
      }
    }
  }

  return res
}

const res = findStr1('aaabbccccd');
console.log('res: ', res);

export default {}