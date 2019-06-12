function parseURL(url) {
  var a = document.createElement('a');
  a.href = url;
  var obj = {};
  obj.protocol = a.protocol.replace(/\:/, '');
  obj.host = a.host;
  obj.path = a.pathname;
  obj.hash = a.hash.replace(/\#/, '');
  var search = a.search.replace(/\?/, '');
  var arr = search.split('\&');
  var params = {};
  arr.forEach(function(ele) {
    var arrt = ele.split('=');
    params[arrt[0]] = arrt[1];
  });
  obj.params = params;
  console.log(obj);
}   
parseURL("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");