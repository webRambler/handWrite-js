// 数组扁平化就是将 [1, [2, [3]]] 这种多层的数组拍平成一层 [1, 2, 3]。使用 Array.prototype.flat 可以直接将多层数组拍平成一层：
const nums = [1, [2, [3]]]

// 法一：
function flattenArr(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// 法二：递归
function flatten(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      res = res.concat(flatten(arr[i]))
    } else res.push(arr[i])
  }
  return res
}

// 法三：reduce递归
function flatten(arr) {
  arr.reduce((prev, val) => {
    return prev.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}

// 法四：JSON.stringify / JSON.parse（结合正则替换）
function flatten(arr) {
  let str = JSON.stringify(arr)
  str = str.replace(/\[|\]/g, '')
  // console.log(str, 777)
  return JSON.parse('[' + str + ']')
}

console.log(flatten(nums));
console.log(JSON, 777)
