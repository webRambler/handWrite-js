Array.prototype.myFilter = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('参数必须是函数')
  }
  const arr = this
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (cb.call(arr[i], i, arr)) res.push(arr[i])
  }
  return res
}

const arr = [3, 2, 5, 6]

const res = arr.myFilter((item, i, arr1) => {
  console.log(item, i, arr1, 666)
  return item >= 5
})

console.log(res, 'res')
