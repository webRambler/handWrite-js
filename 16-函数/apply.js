Function.prototype.myApply =function (obj, args) {
  const s = Symbol(0)
  obj[s] = this
  const res = obj[s](...args)
  delete obj[s]
  return res
}

const obj = {name: 'Tom'}

var name = 'Linda'

function fn(age, num) {
  console.log(this.name, age, num)
}

fn(16, 22)

fn.myApply(obj, [17, 36])
