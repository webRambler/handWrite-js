let id = 0
class Dep {
  constructor() {
    this.subs = []
    this.id = id++
  }

  addSub (w) {
    this.subs.push(w)
  }

  notify() {
    this.subs.forEach(w => {
      w.update()
    })
  }
}

module.exports = Dep
