Array.prototype.myMap = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('参数必须是函数')
  }
  const arr = this
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res[i] = cb.call(arr[i], i, arr)
  }
  return res
}

const arr = [3, 2, 5, 6]

const res = arr.myMap((item, i, arr1) => {
  console.log(item, i, arr1, 666)
  return item + 1
})

console.log(res, 'res')
