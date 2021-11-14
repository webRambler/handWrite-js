Function.prototype.myCall = function (obj, ...args) {
  const s = Symbol(1)
  obj[s] = this
  const res = obj[s](...args)
  delete obj[s]
  return res
}

const obj = {name: 'Tom'}

var name = 'Linda'

function fn(age) {
  console.log(this.name, age)
}

fn(16)

fn.myCall(obj, 17)
