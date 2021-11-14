Array.prototype.myMap = function (cb) {
  const arr = this
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res[i] = cb(arr[i], i, arr)
  }
  return res
}

const arr = [3, 2, 5, 6]

const res = arr.myMap((item, i, arr1) => {
  console.log(item, i, arr1, 666)
  return item + 1
})

console.log(res, 'res')
