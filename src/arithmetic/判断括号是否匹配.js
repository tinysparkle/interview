
/**
 * left: 左括号
 * right: 右括号
*/
function isMatch (left, right) {
  if (left === '{' && right === '}') return true;
  if (left === '[' && right === ']') return true;
  if (left === '(' && right === ')') return true;

  return false;

}

function fun (str) {
  const length = str.length;
  if (length === 0) return true;

  const stack = []
  const leftSybol = '{[(';
  const rightSybbol = ')]}'
  for (let i = 0; i < length; i++) {

    const s = str[i]

    if (leftSybol.includes(s)) {
      // 包含左括号 压栈
      stack.push(s);
    } else if (rightSybbol.includes(s)) {
      const top = stack[stack.length - 1];
      // 包含右括号 判断栈顶
      if (isMatch(top, s)) {
        stack.pop();
      } else {
        return false
      }
    }
  }

  return stack.length === 0;
}
var str = '{[(]}';

const res = fun(str)
console.log('res: ', res);
