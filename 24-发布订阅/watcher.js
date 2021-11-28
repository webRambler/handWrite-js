let wid = 0
class Watcher {
  constructor(fn) {
    this.wid = wid++
    this.dep = null
    this.fn = fn
  }

  update() {
    this.fn()
  }
}

module.exports = Watcher
