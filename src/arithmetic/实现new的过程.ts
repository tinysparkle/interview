class Foo {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getName() {
    return this.name
  }
}

function newFunc<T>(constructor: Function, ...arg: any[]): T {
  // 1. 创建一个空对象，继承constructor原型
  const obj = Object.create(constructor.prototype)
  // 2. 将obj作为constructor的this，并传入arg
  constructor.apply(obj, arg)

  return obj
}

const f = new Foo('lucy', 18)
console.log('f : ', f );
const f2 = newFunc(Foo, 'lucy', 18)
console.log('f2: ', f2);
export default {}