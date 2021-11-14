function parse(str) {
  if (/^\d+\.?\d*$/.test(str)) return parseFloat(str)


}

console.log(JSON.parse("2.6"));
console.log(parse('12.6'));
