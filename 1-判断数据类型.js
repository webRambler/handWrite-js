function judgeDataType(data) {
  const str = Object.prototype.toString.call(data)
  return str.slice(8, -1)
}

console.log(judgeDataType(/\d/));
