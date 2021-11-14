function stringify(obj) {
  function isObj(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  }
  if (typeof obj !== 'object') return obj.toString()
  let res = ''
  if (obj instanceof Array) {
    res = '[' + obj.toString() + ']'
  } else if (isObj(obj)) {
    res = '{'
    for (const objKey in obj) {
      if (typeof obj[objKey] === 'function' || typeof obj[objKey] === 'undefined' || typeof obj[objKey] === 'null' || typeof obj[objKey] === 'symbol') {
        continue
      }
      if (obj.hasOwnProperty(objKey)) {
        if (!isObj(obj[objKey])) {
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

const arr = [1, 2, 3]
console.log(JSON.stringify(arr));
console.log(stringify(arr));

const obj = {age: 15, t: undefined, name: 'Tom', fun: {num: 26, fn: function () {}}}
console.log(JSON.stringify(obj));
console.log(stringify(obj));
