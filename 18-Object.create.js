function ObjectCreate(obj) {
  function F(){}
  F.prototype = obj
  const o = new F()
  if (obj === null) {
    o.__proto__ = null
  }
  return o
}

console.log(ObjectCreate(null), 18);
console.log(ObjectCreate({age: 23}), 18);
