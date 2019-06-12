// 定义document.ready()
document.ready = function(callback) {
  // 标准浏览器适用
  if(document.addEventListener) {
    document.addEventListener("DOMContentLoaded", callback, false);
  } else if(document.attachEvent) {
    // ie8 及以下浏览器适用
    document.attachEvent('onreadystatechange', function () { 
      // 已加载 文档和用户可以开始交互
      if(document.readyState == 'interactive') {
        callback(window.event);
      }
    });
  } 
};
