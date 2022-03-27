
function add(num1: number, num2: number, num3: number) {
  return num1 + num2 + num3
}


function curry(fn: Function) {
  const argLength = fn.length

  let args: number[] = []
  const calc = (arg: number) => {  
    args = [
      arg,
      ...args
    ]
    if (args.length < argLength) {
      return calc
    } else {
      const res = fn.apply(this, args)
      return res
    }
  }
  return calc
}



const fn = curry(add);
const r = fn(10)(20)(30) // 60
console.log('r: ', r);