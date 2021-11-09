// 初始传参数
function curry(fn) {
  let arg1 = [...arguments].slice(1)
  return function curried() {
    if (fn.length - arguments.length <= arg1.length) return fn.apply(null, [...arg1, ...arguments])
    else {
      return (...args) => curried(...arguments, ...args)
    }
  }
}

// 初始不传参
// function curry(fn) {
//   let judge = (...args) => {
//     if (args.length == fn.length) return fn(...args)
//     return (...arg) => judge(...args, ...arg)
//   }
//   return judge
// }


function add(x, y, z) {
  return x + y + z
}

const curryAdd = curry(add, 1)

console.log(curryAdd(2));
console.log(curryAdd(3)(6));
