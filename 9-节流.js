function throttle(fn, delay) {
  let startTime = Date.now()
  return function () {
    let endTime = Date.now()
    if (endTime - startTime >= delay) {
      fn.apply(null, arguments)
      startTime = endTime
    }
  }
}
