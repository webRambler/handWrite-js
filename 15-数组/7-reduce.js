Array.prototype.myReduce = function (cb, initialization) {
  if (typeof cb !== 'function') {
    throw new Error('参数必须是函数')
  }
  if (initialization && (Object.prototype.toString.call(initialization) === 'Symbol' || Object.prototype.toString.call(initialization) === 'Function')) {
    throw new Error('第二个参数必须是object，array，string，number,boolean其中一种类型')
  }
  const arr = this
  let prev = initialization
  if (!initialization) {
    prev = arr[0]
  }
  const start = initialization ? 0 : 1
  for (let i = start; i < arr.length; i++) {
    prev = cb.call(prev, arr[i], i, arr)
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
