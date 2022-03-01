const PENGDING = 'pending',
      FULFILLED = 'fulfilled',
      REJECTED = 'rejected'


class MyPromise {
  constructor (executor) {
    this.state = PENGDING;
    this.value = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.state = PENGDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }

    const reject = reason => {
      if (this.state = PENGDING) {
        this.state = REJECTED;
        this.value = reason;
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then (onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onFulfilled : reason => { throw new Error(reason) }

    const thenPromise = new MyPromise((resolve, reject) => {
      let x;
      const resolvePromise = (cb) => {
        x = cb(this.value);
        if (x instanceof MyPromise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      }

      if (this.state === PENGDING) {
        this.onFulfilledCallbacks.push(
          () => {
            resolvePromise(onFulfilled)
          }
        )

        this.onRejectedCallbacks.push(
          () => {
            resolvePromise(onRejected)
          }
        )
      }

      if (this.state === FULFILLED) {
        resolvePromise(onFulfilled)
      }

      if (this.state === REJECTED) {
        resolvePromise(onRejected)
      }
    })

    return thenPromise
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1000)
}).then(res => {
  return new MyPromise((resolve, reject) => {
    resolve(10000)
  })
}).then(res => {
  console.log('res: ', res);

})
