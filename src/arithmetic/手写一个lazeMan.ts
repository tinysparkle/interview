class LazeMan {
  private name: string
  private stack: Function[] = []
  constructor(name: string) {
    this.name = name
    setTimeout(() => {
      this.next()
    })
  }

  private next() {
    if (this.stack.length) {
      const fn = this.stack.shift()
      fn()
    }

  }

  eat(str: string) {
    const fn = () => {
      console.log(`${this.name} eat ${str}`)
      this.next()
    }
    this.stack.push(fn)
    return this
  }

  sleep(n: number) {
      const fn = () => {
        setTimeout(() => {
          console.log(`${this.name} 睡了 ${n}s, 开始执行下一个`)
          this.next()
        }, n * 1000);
      }
      this.stack.push(fn)
    return this
  }

}

const man = new LazeMan('lucy')

man.eat('桃子').eat('栗子').eat('橘子').sleep(2).eat('香蕉')