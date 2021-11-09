// 法一：replace
// function render(templateStr, data) {
//   const reg = /\{\{(\w+)\}\}/g
//   const str = templateStr.replace(reg, function () {
//     return data[arguments[1]]
//   })
//   return str
// }

// 使用while不停的使用正则test也可以
function render(templateStr, data) {
  const reg = /\{\{(\w+)\}\}/
  while (reg.test(templateStr)) {
    templateStr = templateStr.replace(reg, function () {
      return data[arguments[1]]
    })
  }
  return templateStr
}

let template = '我是{{name}}，称号是{{title}},年龄{{age}}，性别{{sex}}';
let person = {
  name: '亚索',
  title: '疾风剑豪',
  age: 26,
  sex: '男'
}
console.log(render(template, person));
