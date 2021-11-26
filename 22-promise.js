class MyPromise {
  constructor(excutor) {
    const self = this
    this.status = 'pending'
    this.value = void 0
    this.errMsg = void 0
    this.resolvedCbs = []
    this.rejectedCbs = []
    try {
      excutor(resolve, reject)
    } catch (err) {
      console.log(err)
    }
    function resolve(val) {
      if (self.status === 'pending') {
        self.status = 'resolved'
        self.value = val
        self.resolvedCbs.forEach(fn => {
          self.value = fn(self.value)
        })
      }
    }
    function reject(err) {
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.errMsg = err
        self.rejectedCbs.forEach(fn => {
          self.errMsg = fn(self.errMsg)
        })
      }
    }
  }

  /**
   * then方法
   * @param fn1
   * @param fn2
   */
  then(fn1, fn2) {
    if (this.status === 'pending') {
      this.resolvedCbs.push(val => fn1(val))
      this.rejectedCbs.push(val => fn2(val))
    }
    if (this.status === 'resolved') {
      this.value = fn1(this.value)
    }
    if (this.status === 'rejected') {
      this.errMsg = fn2(this.errMsg)
    }
    return this
  }

  /**
   * catch方法
   * @param fn
   */
  catch(fn) {
    if (this.status === 'rejected') {
      this.errMsg = fn(this.errMsg)
    }
    return this
  }

  /**
   * Promise.resolve方法
   * @param val
   */
  static resolve(val) {
    return new Promise(resolve => {
      return resolve(val)
    })
  }

  /**
   * Promise.reject方法
   * @param val
   */
  static reject(val) {
    return new Promise((_, reject) => {
      return reject(val)
    })
  }

  /**
   * promise.all方法
   * @param promises [Promise]
   */
  static all(promises) {
    return new Promise(resolve => {
      const res = []
      let count = 0
      const n = promises.length
      for (let i = 0; i < n; i++) {
        promises[i].then(v => {
          count++
          res[i] = v
          if (count === n) return resolve(res)
        })
      }
    })
  }

  /**
   * promise.race方法
   * @param promises
   */
  static race(promises) {
    return new Promise(resolve => {
      let count = 0
      const n = promises.length
      for (let i = 0; i < n; i++) {
        promises[i].then(v => {
          count++
          if (count === 1) return resolve(v)
        })
      }
    })
  }

}

const p = new MyPromise(resolve => {
  console.log(333)
  setTimeout(_ => {
    console.log(555)
    resolve(6)
  }, 2000)

})

p.then(val => {
  console.log(val)
  return 777
}).then(v => {
  console.log(v)
}).then(v1 => {
  console.log(v1, 'v1')
})
