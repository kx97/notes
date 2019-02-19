(function() {
  window.onload = function() {
      //图片自动播放
      autoslide();
      //点击左右按钮，切换图片 
      var prev = document.querySelector('.prev');
      var next = document.querySelector('.next');
      prev.onclick = function() {
          slideprev();
          autoslide();
      };
      next.onclick = function() {
          slidenext();
          autoslide();
      };
      // 点击小圆点，切换图片
      //使用 委托
      var slideDiv = document.querySelector('.slide-sel');
      slideDiv.onclick = function(e) {
          e = e || window.event;
          var target = e.target || e.srcElement;
          if(target == this) {
              return;
          } else {
              slidesel(target);
              autoslide();
          }
      };
      //实现的相关函数
      var timer;
      function autoslide() {
          if(timer) {
              clearInterval(timer);
              timer = null;
          }
          timer = setInterval(function() {
              slidenext();
          }, 2000);
      }
      function slideprev() {
          var curimg = document.querySelector('.img-list .on');
          var curindex = parseInt(curimg.getAttribute('index'));
          

          var nextindex = (curindex + 3) % 4;
          slide(curindex, nextindex);
      }
      function slidenext() {
          var curimg = document.querySelector('.img-list .on');
          var curindex = parseInt(curimg.getAttribute('index'));

          var nextindex = (curindex + 1) % 4;
          slide(curindex, nextindex);
      }
      function slidesel(target) {
          var curindex = document.querySelector('.img-list .on').getAttribute('index');
          curindex = parseInt(curindex);
          var nextindex = target.getAttribute('index');
          nextindex = parseInt(nextindex);

          slide(curindex, nextindex);
      }
      function slide(curindex, nextindex) {
          var imglist = document.querySelector('.img-list');
          var curleft = imglist.offsetLeft;
          var nextleft = nextindex * (-500);

          //imglist.style.left = nextleft + 'px';
          slideslow(curleft, nextleft, imglist, 800);
          var lilist = imglist.querySelectorAll('li');
          lilist[curindex].className = '';
          lilist[nextindex].className = 'on';

          var sellist = document.querySelectorAll('.slide-sel a');
          sellist[curindex].className = '';
          sellist[nextindex].className = 'on';
      }
      //实现图片接连滑出
      function slideslow(curleft, nextleft, element, duration) { 
          var distance = nextleft - curleft;
          var distanceMS = distance / duration;
          var start = Date.now();

          var distimer = setInterval(function() {
              var now = Date.now();
              var Dtime = now - start;
              element.style.left = (element.offsetLeft + Dtime * distanceMS) + 'px';
              duration = duration - Dtime;
              if(duration <= 0) {
                  element.style.left = nextleft + 'px';
                  clearInterval(distimer);
                  return;
              }
              now = start;
          }, 1000/60);
      }
  };
})();