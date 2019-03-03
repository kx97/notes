## promise - 是一个对象，可以通过它获取异步操作的消息
### 基本实现
```
const promise = new Promise(function(resolve, reject) {
  if(/*success*/) {
    resolve(value);
  } else {
    reject(error);
  }
});
```
> resolve 异步操作成功时调用，并将结果当做参数传递；reject 异步操作失败时调用，并将错误当做参数传递出来

### then() - 为 promise 对象增加状态改变时的回调函数
```
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
> then 可以接受两个回调函数作为参数，第二个参数是可选的

### 通过 promise 实现 AJAX 的实例
```
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const XHR = new XMLHttpRequest();
    XHR.open('get', url);
    XHR.onreadystatechange = function() {
      if(this.readyState != 4) {
        return;
      }
      if(this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    XHR.responseType = "json";
    XHR.setRequestHeader('Accept', 'application/json');
    XHR.send();
  });
  return promise;
};
getJSON(/post.json).then(function(json) {
  console.log("Content: " + json);
}, function(error) {
  console.error("Error: ", error);
});
```
> resolve 函数的参数可以是数值，也可以是 promise 对象；reject 函数参数一般是 Error 对象的实例

### catch() - 指定发生错误时的回调函数
> 由于 catch 可以捕获前面 then 方法中的错误，可以一般使用 catch 返回错误信息。catch 方法返回的是 promise 对象，所以可以继续在后面使用 then 方法
```
promise.then(function() {
  // success
}).catch(function() {
  // error
});
```

### finally() - 最后不管状态如何都会执行的操作
```
promise.then(function(resolve, reject) {

}).catch(function(error) {

}).finally(function() {

});
```
> finally 不接受任何参数，所以 finally 的执行与状态无关，不依赖 promise 的执行结果

### promise.all() - 用于将多个 Promise 实例包装成一个新的 Promise 实例
`const p = new Promise([p1, p2, p3]);`
#### p 的状态只有两种结果
1. 当 p1, p2, p3 的状态全都为 fulfilled 时，p 的状态为 fulfilled
2. 当 p1, p2, p3 中有一个状态为 rejected，p 的状态就为 rejected