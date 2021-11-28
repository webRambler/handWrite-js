const Dep = require('./dep')
const Watcher = require('./watcher')

const dep = new Dep()

const w1 = new Watcher(() => console.log('1111'))
const w2 = new Watcher(() => console.log('2222'))

dep.addSub(w1)
dep.addSub(w2)

dep.notify()
