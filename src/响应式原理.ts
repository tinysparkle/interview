class Vue {
  private data
  constructor (options: { data: () => {} }) {
    this.data = options.data()
    this.initData(this.data);
  }

  initData (data: any) {
    let _this: any = this
    Object.keys(data).forEach(key => {
      Object.defineProperty(_this, key, { // 给vue的实例绑定  可以v.name 获取
        set (newVal) {
          // 自身改变同时， 也改变了data中的数据
          data[key] = newVal
        },
        get () {
          return data[key]
        }
      })
    })
  }
}

const v: any = new Vue({
  data() {
    return {
      name: "lucy",
      age: 12
    }
  }
})
v.age = 13
console.log(v)