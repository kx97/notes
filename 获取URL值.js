function geturl(name) {
  var re = new RegExp('([^|&])' + name + '=([^&]*)([&|$])', i);
  var r = window.location.search.substr(1).match(re);
  var val = r[2];
  console.log(val);
}