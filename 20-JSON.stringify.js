function stringify(obj) {
  function isObj(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  }
  if (typeof obj !== 'object') return obj.toString()
  let res = ''
  if (obj instanceof Array) {
    debugger
    res = '['
    for (const item of obj) {
      res += (stringify(item) + ',')
    }
    res = res.slice(0, -1) + ']'
  } else if (isObj(obj)) {
    res = '{'
    for (const objKey in obj) {
      debugger
      if (typeof obj[objKey] === 'function' || typeof obj[objKey] === 'undefined' || typeof obj[objKey] === 'null' || typeof obj[objKey] === 'symbol') {
        continue
      }
      if (obj.hasOwnProperty(objKey)) {
        if (typeof obj[objKey] !== 'object') {
          const val = typeof obj[objKey] === 'number' ? obj[objKey] : `"${obj[objKey]}"`
          res += (`"${objKey}":${val},`)
        } else {
          res += (`"${objKey}":${stringify(obj[objKey])},`)
        }
      }
    }
    res = res.slice(0, -1) + '}'
  }
  return res
}

// const arr = [1, 2, 3]
// console.log(JSON.stringify(arr));
// console.log(stringify(arr));
// const arr = [1, {aaa: 333}]
const obj = {age: 15, arr: [1, {aaa: 333}], t: undefined, name: 'Tom', fun: {num: 26, fn: function () {}}}
console.log(JSON.stringify(obj));
console.log(stringify(obj));
