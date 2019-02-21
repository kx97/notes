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
#### input类型 - email, tel, number, url, search, range, color
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
#### input类型 - Date Pickers（日期选择器）
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
#### placeholder属性
#### 具体使用：
`<input type="text" placeholder="输入用户名" id="name">`
> 占位符， 当用户输入时文本框内的文字消失
#### autofocus属性
#### 具体使用：
`<input type="text" autofocus>`
> 页面加载时，input元素自动获得焦点
#### multiple属性
#### 具体使用：
`<input type="file" multiple>`
> 多文件上传
#### autocomplete属性
#### 具体使用：
`<input type="text" autocomplete name="username">`
> 自动记录输入内容，on - 记录，off - 不记录。注意：1、需要提交后才能记录。2、必须具有name属性
#### required属性
#### 具体使用：
`<input type="text" required>`
> 必填项，内容不能为空
#### accesskey属性
#### 具体使用：
`<input type="text" accesskey="s">`
> 规定获取焦点的快捷键，使用 Alt + s 的形式
- - - - - 
## 5、多媒体标签
#### audio - 音频
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
#### video - 视频
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