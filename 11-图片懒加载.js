// 使用闭包巧妙的将图片元素获取提到最前面，减少后面不必要的DOM操作
// 立即执行函数保证onscroll函数监听的正确性
const lazyloadImage = (() => {
  let count = 0
  const imgList = [...document.querySelectorAll('img')]
  const len = imgList.length
  return function () {
    // 每次设置完图片的src地址，则把其从还未加载的图片列表中删除，避免重复加载，浪费资源请求
    const deletedImgList = []
    imgList.forEach((img, index) => {
      const rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        count++
        img.src = img.dataset.src
        deletedImgList.push(index)
      }
      // 当所有的图片已经加载完成了，则不需要再监听scroll函数，必须移除以节约性能开销
      if (count === len) window.removeEventListener('scroll')
    })
    imgList.filter((v, i) => !deletedImgList.includes(i))
  }
})()


window.addEventListener('scroll', lazyloadImage)
