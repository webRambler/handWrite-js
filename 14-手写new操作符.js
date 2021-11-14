function myNew(fn, ...args) {
  const p = Object.create(fn.prototype)
  p.constructor = fn
  const res = fn.apply(p, args)
  return typeof res === 'object' ? res : p
}
