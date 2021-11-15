/**
 * 将多个函数聚合成一个函数
 * @param fns
 */
function compose(...fns) {
  if (!fns.length) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((acc, fn) => {
    return arg => fn(acc(arg))
  })
}

function f1(arg) {
  console.log(arg, 111)
  return arg
}

function f2(arg) {
  console.log(arg, 222)
  return arg
}

function f3(arg) {
  console.log(arg, 333)
  return arg
}

f1(f2(f3('世界大会上')))

compose(f1, f2, f3)('dfdf')
