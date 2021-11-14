Function.prototype.myCall = function (obj, ...args) {
  const s = Symbol(1)
  obj[s] = this
  obj[s](...args)
  delete obj[s]
}

const obj = {name: 'Tom'}

var name = 'Linda'

function fn(age) {
  console.log(this.name, age)
}

fn(16)

fn.myCall(obj, 17)
