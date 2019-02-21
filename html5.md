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
#### input类型 - email, tel, number, url, search, range
```
<form action="">
  邮箱：<input type="email"> <br>
  电话：<input type="tel"> <br>
  数字：<input type="number"> <br>
  url： <input type="url"> <br>
  搜索：<input type="search"> <br>
  拖动滑块：<input type="range"> <br>
</form>
```
#### input类型 - Date Pickers（日期选择器）
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
