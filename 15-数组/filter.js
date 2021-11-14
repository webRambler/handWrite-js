Array.prototype.myFilter = function (cb) {
  const arr = this
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) res.push(arr[i])
  }
  return res
}

const arr = [3, 2, 5, 6]

const res = arr.myFilter((item, i, arr1) => {
  console.log(item, i, arr1, 666)
  return item >= 5
})

console.log(res, 'res')
