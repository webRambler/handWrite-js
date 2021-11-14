Array.prototype.myForEach = function (cb) {
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}

const arr = [3, 2, 5, 6]

arr.myForEach((item, i, arr1) => {
  console.log(item, i, arr1, 666)
})
