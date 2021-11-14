function ObjectAssign(obj1, obj2) {
  function isObj(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  }
  if (!isObj(obj1) || !isObj(obj2)) {
    throw new Error('参数必须为对象')
  }
  for (const obj2Key in obj2) {
    if (obj2.hasOwnProperty(obj2Key)) {
      obj1[obj2Key] = obj2[obj2Key]
    }
  }
  return obj1
}

const o1 = {age: 36}
const o2 = {a: 13, name: 666}
console.log(ObjectAssign(o1, o2));
