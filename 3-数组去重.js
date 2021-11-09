const nums = [1,2,1,2,3,6,9,6]

// 法一：Set
function removeRepetition(arr) {
  return [...new Set(arr)]
  // 或者
  // return Array.from(new Set(arr))
}

// 法二：双重循环比对每一项O(n^2)
function unique(arr) {
  var res = arr.filter(function(item, index, array) {
    return array.indexOf(item) === index
  })
  return res
}

// 法三：使用快速排序(O(nlogn))对数组进行升序排序，然后利用双指针(O(n))，一次循环，比较相邻两项的值是否相等，最后的时间复杂度为O(nlogn)
