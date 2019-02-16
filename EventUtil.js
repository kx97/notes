(function() {
  var EventUtil = {
    // element：绑定事件对象，type：绑定事件类型，handler：绑定事件的处理程序，isCapture：捕获冒泡
    addEvent: function (element, type, handler, isCapture) { 
      if(element.addEventListener) {
        // 确保 isCapture 是 Boolean类型
        isCapture = isCapture ? true : false;
        element.addEventListener(type, handler, isCapture);
      } else {
        element.attachEvent('on' + type, function() {
          return handler.call(element, window.event);// 函数回调模式
          // 实现element调用handler函数，将window.event 传入handler。
        });
      }
    },
    // 获取对象的兼容处理
    getEvent: function(e) {
      return e || window.event;
    },
    // 获取事件源对象的兼容处理
    getTarget: function(e) {
      return e.srcElement || e.target;
    },
    // 阻止冒泡
    stopPropagation: function(e) {
      if(e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancleBubble = true;
      }
    },
    // 阻止默认行为
    preventDefault: function (e) {  
      if(e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    }
  };
  window.EventUtil = EventUtil;
}
)(window || {});