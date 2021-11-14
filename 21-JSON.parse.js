// 法一：new Function，  return
function parse(str) {
  return new Function('return ' + str)()
}

// 方法二：eval
function parse(str) {
  return eval('(' + str + ')')
}

console.log(JSON.parse("2.6"));
console.log(parse('12.6'));

console.log(JSON.parse('{"name": "Tom", "age": 23}'));
console.log(parse('{"name": "Tom", "age": 23}'));
