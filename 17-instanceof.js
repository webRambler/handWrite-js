function myInstanceof(obj, Fn) {
  if (typeof Fn !== 'function') {
    throw new Error('第二个参数必须为函数')
  }
  while (obj) {
    if (obj.constructor === Fn) return true
    obj = obj.__proto__
  }
  return false
}

const obj = []

console.log(obj instanceof Object)
console.log(myInstanceof(obj, Object))
