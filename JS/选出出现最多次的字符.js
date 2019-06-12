function countStr(str) {
  var arr = str.split('');
  var obj = {};
  arr.forEach(element => {
    if(obj[element]) {
      obj[element] ++;
    } else {
      obj[element] = 1;
    }
  });
  var count = 0;
  var char = '';
  for(var i in obj) {
    if(obj[i] > count) {
      count = obj[i];
      char = i;
    }
  }
  console.log("出现最多的字符：" + char + "，出现次数：" + count);
}