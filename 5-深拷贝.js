// 快速方法（缺点会忽略掉函数，这是JSON.stringify的硬伤）
// 以下来自MDN的描述
// JSON.stringify()将值转换为相应的JSON格式：
//
//   转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
//   非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
//   布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
//   undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined).
//   对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
//   所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
//   Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
//   NaN 和 Infinity 格式的数值及 null 都会被当做 null。
//   其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}


// 常规方法
function judgeType(o) {
  return Object.prototype.toString.call(o).slice(8, -1)
}
function deepCopy(obj) {
  if (typeof obj !== 'object') return obj
  let res
  if (judgeType(obj) === 'Array') res = []
  else if (judgeType(obj) === 'Object') res = {}
  for (const objKey in obj) {
    if (typeof obj[objKey] !== 'object') {
      res[objKey] = obj[objKey]
    } else {
      res[objKey] = deepCopy(obj[objKey])
    }
  }
  return res
}

const obj1 = {
  name: 'Tom',
  likes: ['Apple', 'Google', 'Tesla', 'SpaceX'],
  a: {
    b: 123,
    c: [{id:333}, 6, {cc: {dd: 1}}]
  }
}

const obj2 = deepCopy(obj1)
obj2.likes.push('meta')
obj2.a.b = 456
console.log(obj2, 'obj2')
console.log(obj1, 'obj1')
