Array.prototype.myFindIndex = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('参数必须是函数')
  }
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    if (cb.call(arr[i], i, arr)) return i
  }
  return -1
}

const arr = [3, 2, 5, 6]

const res = arr.myFindIndex((item, i, arr1) => {
  console.log(item, i, arr1, 666)
  return item > 4
})

console.log(res, 'res')
