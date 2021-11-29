// 什么是偏函数？偏函数就是将一个 n 参的函数转换成固定 x 参的函数，剩余参数（n - x）将在下次调用全部传入。
function partial(fn) {
  const args = [...arguments].slice(1)
  return function () {
    return fn(...args, ...arguments)
  }
}

function add(a, b, c) {
  return a + b + c
}
let partialAdd = partial(add, 1)
console.log(partialAdd(2, 3));
