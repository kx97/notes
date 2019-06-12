// 深拷贝的第一种方法
// 递归复制所有层级属性
function deepClone(obj) {
  var result, oClass = isClass(obj);
  if(oClass === 'Object') {
    result = {};
  } else if(oClass === 'Array') {
    result = [];
  } else {
    return obj;
  }
  for(var key in obj) {
    var copy = obj[key];
    if(isClass(copy) === 'Object') {
      result[key] = arguments.callee(copy);
    } else if(isClass(copy) === 'Array') {
      result[key] = arguments.callee(copy);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

// 判断数据类型函数
function isClass(o) {
  if(o === null) return null;
  if(o === undefined) return undefined;
  return Object.toString.call(o).slice(8, -1);
}

// 第二种方法 - JSON.parse(JSON.stringify())
var newObj = JSON.parse(JSON.stringify(oldObj));
