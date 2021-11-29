// 初始传参数
function curry(fn) {
  const arg1 = [...arguments].slice(1)
  return function curried() {
    if (fn.length - arguments.length <= arg1.length) {
      const args = [...arg1, ...arguments]
      return fn.apply(null, args)
    }
    else {
      return (...arg) => curried(...arguments, ...arg)
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

console.log(curryAdd(2)(3,4));
console.log(curryAdd(3)(6));

// 最后要加一次额外的调用版本()
function Curry(fn) {
  const arg1 = [...arguments].slice(1)
  return function fn2() {
    if (fn.length - arguments.length <= arg1.length) {
      const args = [...arg1, ...arguments]
      return () => fn(...args)
    } else {
      return (...arg) => fn2(...arguments, ...arg)
    }
  }
}

const add2 = Curry(add)

console.log(add2(1));
console.log(add2(1)(2,3)());
console.log(add2(1,2,3)());
console.log(add2(1)(2)(3)());
