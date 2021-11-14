Function.prototype.myBind = function (obj) {
  const arg1 = [...arguments].slice(1)
  return args => {
    const args2 = arg1.concat(args)
    this.call(obj, ...args2)
  }
}
