class MyPromise {
  constructor(excutor) {
    this.status = 'pending'
    this.value = void 0
    this.errMsg = void 0
    this.resolvedCbs = []
    this.rejectedCbs = []
    excutor(resolve, reject)
    function resolve(val) {
      if (this.status === 'pending') {
        this.status = 'resolved'
        this.value = val
        this.resolvedCbs.forEach(fn => {
          this.value = fn(this.value)
        })
      }
    }
    function reject(err) {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.errMsg = err
        this.rejectedCbs.forEach(fn => {
          this.errMsg = fn(this.errMsg)
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
      this.resolvedCbs.push((val) => fn1(val))
    }
    if (this.status === 'resolved') {
      this.value = fn1(this.value)
    }
    if (this.status === 'rejected') {
      this.errMsg = fn2(this.errMsg)
    }
  }

  /**
   * catch方法
   * @param fn
   */
  catch(fn) {
    if (this.status === 'rejected') {
      this.errMsg = fn(this.errMsg)
    }
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
