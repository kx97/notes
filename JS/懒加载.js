// 实现图片懒加载
const lazyLoadImg = function() {
  const images = document.getElementsByTagName('img')
  for(let i = 0; i < images.length; i++) {
    if(images[i].getAttribute('data-src')) {
      images[i].setAttribute('src', images[i].getAttribute('data-src'))
      images[i].onload = function() {
        images[i].removeAttribute('data-src')
      } 
    }
  }
}

// 监听滚动条实现图片懒加载

// 1、实现一个节流函数
function throttle(func, wait, time) {
  let timeout
  let startTime = new Date()
  return function() {
    let that = this
    let args = arguments
    let currTime = new Date()
    clearTimeout(timeout)
    if(currTime - startTime >= time) {
      // 时间间隔大于设置的间隔，触发 func 函数
      func.apply(that, args)
      startTime = currTime
    } else {
      // 小于时，重新设置定时器
      timeout = setTimeout(func, wait)
    }
  }
}

// 2、判断元素是否在可视范围
function eleInViewport(ele) {
  let rect = ele.getBoundingClientRect()
  return (rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
}

// 3、加载图片
function lazyLoadImgs(images) {
  // count 用于记录当前加载的图片数量
  let count = 0
  return function() {
    Array.slice.call(images, count).forEach(function(image) {
      if(eleInViewport(image)) {
        image.setAttribute('src', image.getAttribute('data-src'))
        count++
      }
    }); 
  }
}
// 4、获取所有图片节点
let images = document.getElementsByTagName('img') 

// 5、监听滚动条，加载图片
window.addEventListener('scroll', throttle(lazyLoadImgs(images), 500, 1000))