## 1、datalist 标签 -- 下拉列表。
#### 使用须知：搭配 input 使用，与 select 相似
#### 具体使用：
```
<input type="text" value="输入选择" list="fruit">
<datalist id="fruit">
  <option>西瓜</option>
  <option>苹果</option>
  <option>香蕉</option>
  <option>橘子</option>
  <option>香瓜</option>
</datalist>
```
> input 的 list 指向 datalist 的 id，实现 input 和 datalist 的连接。
- - - - - - - - - 
## 2、fieldset 标签 -- 从逻辑上将表单中的元素组合起来。
#### 使用须知：搭配 legend 的使用
#### 具体使用：
```
<fieldset>
  <legend>用户登录</legend>
  用户名：<input type="text" placeholder="用户名" id="name">
  <br><br>
  密 码：<input type="password" name="pwd" id="pwd">
</fieldset>
```
> fieldset 标签会在相关表单元素周围绘制边框。legend 标签为 fieldset 元素定义标题。
- - - - -
## 3、新增的input type 类型
### input类型 - email, tel, number, url, search, range, color
#### 具体使用：
```
<form action="">
  邮箱：<input type="email"> <br>
  电话：<input type="tel"> <br>
  数字：<input type="number"> <br>
  url： <input type="url"> <br>
  搜索：<input type="search"> <br>
  拖动滑块：<input type="range"> <br>
  颜色：<input type="color"> <br>
</form>
```
### input类型 - Date Pickers（日期选择器）
#### 具体使用：
```
<form action="">
  时间：<input type="time" >
  年月日：<input type="date">
  月份：<input type="month">
  周：<input type="week">
  UTC时间：<input type="datatime">
  本地时间：<input type="datatime-local">
</form>
```
- - - - -
## 4、新增的input 新属性
### placeholder属性
#### 具体使用：
`<input type="text" placeholder="输入用户名" id="name">`
> 占位符， 当用户输入时文本框内的文字消失
### autofocus属性
#### 具体使用：
`<input type="text" autofocus>`
> 页面加载时，input元素自动获得焦点
### multiple属性
#### 具体使用：
`<input type="file" multiple>`
> 多文件上传
### autocomplete属性
#### 具体使用：
`<input type="text" autocomplete name="username">`
> 自动记录输入内容，on - 记录，off - 不记录。注意：1、需要提交后才能记录。2、必须具有name属性
### required属性
#### 具体使用：
`<input type="text" required>`
> 必填项，内容不能为空
### accesskey属性
#### 具体使用：
`<input type="text" accesskey="s">`
> 规定获取焦点的快捷键，使用 Alt + s 的形式
- - - - - 
## 5、多媒体标签
### audio - 音频
#### 具体使用：
`<audio src="./gbm.mp3" autoplay controls loop="3"></audio>`
> autoplay: 自动播放，controls: 控制暂停还是开始， loop: 控制循环次数，loop="-1"时，无限循环播放
#### audio支持三种音频格式， Ogg、MP3、Wav, 为支持浏览器兼容，通常制作三种格式的音频文件
#### 具体使用：
```
<audio autoplay controls>
  <source src="./bgm.mp3">
  <source src="./bgm.ogg">
</audio>
```
### video - 视频
#### 具体使用：
`<video src="./gbm.mp4" autoplay controls loop="3"></video>`
> autoplay: 自动播放，controls: 控制暂停还是开始， loop: 控制循环次数，loop="-1"时，无限循环播放，width，height
#### video支持三种音频格式， Ogg、MPEG 4、WebM, 为支持浏览器兼容，通常制作三种格式的视频文件
#### 具体使用：
```
<video autoplay controls>
  <source src="./bgm.mp4">
  <source src="./bgm.ogg">
</video>
```
- - - - - 
## 6、拖放
### 例如拖动图片 
#### 第一步：设置要拖动的元素为可拖动
`<img src="" draggable="true">`
>  draggable = "true"
#### 第二步：被拖动的元素信息设置 - ondragstart 
```
function drag(event) {
  event.dataTransfer.setData('Text', event.target.id);
}
``` 
> dataTransfer.setData() 设置被拖数据的数据类型和值
#### 第三步：进行放置元素的目标位置设置 - ondrop
```
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData('Text');
  event.target.appendChild(document.getElementById(data));
}
```
> drop默认是以链接打开，需要阻止默认行为。得到被拖动元素id，添加到目标位置中
#### 第四步：放到何处 - ondragover，ondragover 事件规定在何处放置被拖动的数据。
```
function allowDrop(event) {
  event.preventDefault();
}
```
> 默认的，无法将数据和元素传到其他元素中，需要阻止元素的默认行为
#### 具体实现
```
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69" />

```
- - - - - 
## 7、地理定位
### getCurrentPosition() 获取位置
```
var pos = document.getElementById('pos');
function getLocal() {
  if(navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showLocal);
  } else {
    return "你的设备不支持定位";
  }
}
function showLocal(position) {
  pos.innerHTML = "Latitude: " + position.coords.latitude + '<br>' +
  "longitude: " + position.coords.longitude;
}
```
> 返回用户位置的经度和纬度
### watchPosition() 更新位置
```
var pos = document.getElementById('pos');
function getLocal() {
  if(navigator.geolocation) {
    return navigator.geolocation.watchPosition(showLocal);
  } else {
    return "你的设备不支持定位";
  }
}
function showLocal(position) {
  pos.innerHTML = "latitude: " + position.coords.latitude + "<br> 
  longitude: " + position.coords.longitude;
}
```
> dearWatch() 停止watchPosition() 的方法
- - - - -
## 8、Web Storage 
> API：setItem(key, value), getItem(key), removeItem(key), clear(), key(index)
### 1、localStorage - 没有时间限制的数据存储
```
if(localStorage.pagecount) {
  localStorage.pagecount = parseInt(localStorage.pagecount) + 1;
} else {
  localStorage.pagecount = 1;
}
```
> 记录用户访问网页的次数，页面关闭后仍然记录
### 2、sessionStorage - 针对session的数据存储
```
if(sessionStorage.pagecount) {
  sessionStorage.pagecount = parseInt(sessionStorage.pagecount) + 1;
} else {
  sessionStorage.pagecount = 1;
}
```
> 页面关闭后数据清除
- - - - -
## 9、Application Cache（应用程序缓存）
> 可在没有网络的情况下，访问应用
> 优势：1. 离线浏览 2. 加载速度加快 3. 减少服务器负载
#### 具体应用：
```
<html manifest="demo.appcache">
```
#### 关于manifest文件
```
// CACHE MANIFEST后的文件将在首次下载后进行缓存
CACHE MANIFEST
/theme.css
/logo.gif
/main.js

// NETWORK后的文件需要与服务器连接，不能被缓存
NETWORK
login.asp

// FALLBACK后的文件无法建立连接时，后面的文件会替换
FALLBACK
/html5/ /404.html
```
> 为了确保浏览器更新缓存，需要更新manifest文件
- - - - - 


## 10、Web Workers
> Web Worker 是运行在后台的JavaScript脚本，独立于其他脚本，不会影响页面性能
#### 具体实现：
```
var w;
function startWorker() {
  if(typeOf(Worker) !== 'undefined') {
    if(typeOf(w) == 'undefined') {
      w = new Worker('workers.js');
    }
    w.onmessage = function(event) {
      document.getElementById('result').innerHTML = event.data;
    };
  } else {
    document.getElementById('result').innerHTML = '你的浏览器不支持Web Workers';
  }
}
function stopWorker() {
  w.terminate(); // 终止web worker
}

// workers.js文件
var i = 0;
function timedcount() {
  i = i + 1;
  postMessage(i); // 用于向HTML传递一消息
  setTimeout("timedcount()", 500);
}
timedcount();
```
> Web Worker 无法访问JavaScript的对象：1、window对象 2、document对象 3、parent对象
- - - - -
## 11、新的语义元素
> 设置 display: block; 实现在旧版本浏览器中使用
```
<header></header>
<nav></nav>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
```
- - - - - 
## 12、WebSocket
> 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
```
if('WebSocket' in window) {
  // 打开一个web socket
  let ws = new WebSocket(url)
  // web socket 连接上后，发送数据
  ws.onopen = function() {
    ws.send(data)
  }
  // 服务端返回数据
  ws.onmessage = function(evt) {
    evt.data
  }
  // 关闭 web socket 连接
  ws.onclose = function() {

  }
} else {
   // 浏览器不支持 WebSocket
}
```
