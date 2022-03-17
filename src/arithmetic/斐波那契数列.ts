/**
 * @description 求斐波那契数列的第n个值
 * 菲波那切数列
 * 0，1，1,2,3,5,8
*/
function func (n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let num1 = 0,
      num2 = 1,
      res = 0;
  for (let i = 2; i <= n; i++) {
    num1 = num2;
    num2 = res;

    res = num1 + num2;
  }
  return res
}

console.log(func(11))



/**
 * @description 递归方式，不可取，可能导致浏览器挂掉
*/
// function func (n: number): number {
//   if (n <= 0) return 0
//   if (n === 1) return 1

//   return func(n - 1) + func(n - 2)
// }