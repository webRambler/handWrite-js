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
Array.prototype.quickSort = function quickSort() {
  const rec = (arr) => {
    if (!arr.length) return []
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const nums = rec(this)
  // 最后复制到原数组中
  for (let i = 0; i < nums.length; i++) {
    this[i] = nums[i]
  }
  return this
}

console.log(nums.quickSort());
console.log(nums, 36)

// 双指针（一前一后，相邻）
let left = 0, right = 1  //(默认数组长度大于1，如果小于1则不用去重了)
while(right < nums.length) {
  if (nums[left] !== nums[right]) {
    nums[left + 1] = nums[right]
    left++
    right++
  } else {
    right++
  }
}
nums.length = left
console.log(nums, 333)
