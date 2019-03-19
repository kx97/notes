## Node
### GET - 数据跟随 URL 传递到服务端
> 可传输的数据大小有限
```
html:

<form action="http://localhost:8080/" method="get">
  用户名：<input type="text" name="user" id="user">
  密码：<input type="password" name="pwd" id="pwd">
  <input type="submit" value="提交">
</form>

server.js:

const http = require('http');
const urlLib = require('url');

var server = http.createServer(function(req, res) {
  var obj = urlLib.parse(req.url, true);
  const GET = obj.query;

  res.end();
});
server.listen(8080);

```
### POST - 请求的数据在请求体中
> 可以传输较大的数据
```
html:

<form action="http://localhost:8080/" method="post">
  用户名：<input type="text" name="user" id="user">
  密码：<input type="password" name="pwd" id="pwd">
  <input type="submit" value="提交">
</form>

server.js:

const http = require('http');
const queryStr = require('querystring');

var server = http.createServer(function(req, res) {
  var str = '';
  // 数据分多次发送
  req.on('data', function(data) {
    str += data;
  });
  // 数据发送完成
  req.on('end', function() {
    const POST = queryStr.parse(str);
    res.end();
  });
});
server.listen(8080);
```
