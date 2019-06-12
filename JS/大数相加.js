function add(a, b) {
  a = a.split('');
  b = b.split('');
  var res = '', c = 0;
  if(a.length > b.length) {
    a.unshift('0');
    var len = Math.abs(a.length - b.length);
    while(len) {
      len--;
      b.unshift('0');
    }
  } else {
    b.unshift('0');
    var len = Math.abs(a.length - b.length);
    while(len) {
      len--;
      a.unshift('0');
    }
  }
  while(a.length) {
    c += parseInt(a.pop()) + parseInt(b.pop());
    res = c % 10 + res;
    c = c > 9 ? 1 : 0;
  }
  res = res.replace(/^0+/, '');
  return res;
}