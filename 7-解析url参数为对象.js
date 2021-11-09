// 解析 URL 参数为对象
function parseParam(url) {
  const reg = /^.+\?(.+)$/
  let queryStr = reg.exec(url)[1]
  const arr = queryStr.split('&')
  console.log(arr, 77)
  const obj = Object.create(null)
  arr.forEach(v => {
    let [key, val] = v.split('=')
    console.log(key, val, 33)
    val && (val = decodeURIComponent(val))
    if (typeof val === 'number') val = parseFloat(val)
    obj[key] = val
  })
  return obj
}

console.log(parseParam('https://www.google.com/search?q=github&newwindow=1&a=36'));


// 法二：正则解决
function parseParam(url) {
  const reg = /^.+\?(.+)$/
  let queryStr = reg.exec(url)[1]
  queryStr = queryStr.replace(/&/g, ',')
  queryStr = queryStr.replace(/(\w+)(=)(\w+)/g, function (){
    if (/^\d+$/.test(arguments[3])) return `"${arguments[1]}":${arguments[3]}`
    return `"${arguments[1]}":"${arguments[3]}"`
  })
  const str = '{' + queryStr + '}'
  return JSON.parse(str)
}
