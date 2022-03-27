// @ts-ignore
Function.prototype.customBind = customBind

function customBind(context: any, ...bindArgs: any[]) {
  const self = this;
  return function(...args: any[]) {
    const newArgs = bindArgs.concat(args)
    return self.apply(context, newArgs)
  }
}

function func(a: number, b: number, c: number) {
  console.log(this)
  console.log(a, b, c)
}
// @ts-ignore
const fn1 = func.customBind({x: 100}, 10)
fn1(20, 30, 40)

export default {}