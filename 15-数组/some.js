Array.prototype.mySome = function (cb) {
  const arr = this
  let res = false
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) res = true
  }
  return res
}

const arr = [3, 2, 5, 6]

const res = arr.mySome((item, i, arr1) => {
  console.log(item, i, arr1, 666)
  return item >= 8
})

console.log(res, 'res')
