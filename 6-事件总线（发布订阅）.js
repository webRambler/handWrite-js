class EventEmitter {
  constructor() {
    this.events = Object.create(null)
  }

  on(eventName, fn) {
    if (!this.events.eventName) this.events.eventName = []
    this.events.eventName.push(fn)
  }

  emit(eventName, fn) {
    if (!this.events.eventName) return
    const lists = this.events.eventName
    if (fn) {
      const args = [...arguments].slice(2)
      const fn1 = lists.find(v => v === fn)
      fn1 && fn1(args)
    } else {
      const args = [...arguments].slice(1)
      lists.forEach(v => v(args))
    }
  }

  off(eventName, fn) {
    if (!fn) delete this.events.eventName
    const index = this.events.eventName.findIndex(v => v === fn)
    index > -1 && this.events.eventName.splice(index, 1)
  }

  once(eventName, fn) {
    if (!fn) {
      const work = () => {
        this.events.eventName.forEach(v => v())
        this.off(eventName)
      }
      this.on(eventName, work)
    } else {
      const work = () => {
        fn()
        this.off(eventName, fn)
      }
      this.on(eventName, work)
    }
  }
}
