1、datalist 标签 -- 选项列表
# 使用须知：搭配input使用，与select 相似
# 具体使用：
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
# input的list指向datalist的id，实现input和datalist的连接。
