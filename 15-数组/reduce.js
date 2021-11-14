Array.prototype.myReduce = function (cb, initialization) {
  const arr = this
  let prev = initialization
  if (!initialization) {
    prev = arr[0]
  }
  const start = initialization ? 0 : 1
  for (let i = start; i < arr.length; i++) {
    prev = cb(prev, arr[i], i, arr)
  }
  return prev
}

const arr = [1,2,3,4]

const res1 = arr.myReduce((prev, item,i ,arr1) => {
  console.log(prev, item, 66)
  return prev + item
})

console.log(res1, 'res')


const res = arr.reduce((prev, item,i ,arr1) => {
  console.log(prev, item, 77)
  return prev + item
})

console.log(res, 'res')
