(function() {
    window.onload = function() {
        autoplay();
        var prev = document.querySelector(".prev");
        var next = document.querySelector('.next');
        prev.onclick = function() {
            slideprev();
            autoplay();
        }
        next.onclick = function() {
            slidenext();
            autoplay();
        };
        // 把a的点击事件委托给父盒子
        var sel = document.querySelector('.slide-sel');
        sel.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target === this) {
                return;
            } else {
                slidesel(target);
                autoplay();
            }
        };
        // 自动播放
        var timer;
        function autoplay() {
            if(timer) {
                clearInterval(timer);
                timer = null;
            }
            timer = setInterval(function() {
                slidenext();
            }, 2000);
        }
        // 滑到下一张
        function slidenext() {
            var imgList = document.querySelector(".img-list");
            var curimg = imgList.querySelector(".on");
            var curindex = parseInt(curimg.getAttribute('index'));
            var nextindex =  (curindex + 1) % 4;
            slide(curindex, nextindex);
        }
        // 滑到上一张
        function slideprev() {
            var imgList = document.querySelector(".img-list");
            var curimg = imgList.querySelector('.on');
            var curindex = parseInt(curimg.getAttribute('index'));
            var nextindex = (curindex + 3) % 4;
            slide(curindex, nextindex);
        }
        // 选中圆点滑动
        function slidesel(target) {
            var imgList = document.querySelector(".img-list");
            var curimg = imgList.querySelector('.on');
            var curindex = parseInt(curimg.getAttribute('index'));
            var nextindex = parseInt(target.getAttribute('index'));
            slide(curindex, nextindex);
        }
        // 实现滑动函数
        function slide(curindex, nextindex) {
            var imgList = document.querySelector(".img-list");
            var selitems = document.querySelectorAll(".slide-sel a");
            var imgItems = imgList.querySelectorAll('li');

            var curleft = imgList.offsetLeft;
            var nextLeft = (-500) * nextindex;

            slideslow(curleft, nextLeft, imgList, 1000);
            // 设置图片的className
            imgItems[curindex].className = "";
            imgItems[nextindex].className = 'on';
            // 设置sel 的className
            selitems[curindex].className = '';
            selitems[nextindex].className = 'on';

        }
        // 滑动效果函数
        function slideslow(curleft, nextLeft, element, duration) {
            var length = nextLeft - curleft;
            var lengthMS = length / duration;
            var start = Date.now();
            var slideTimer = setInterval(function() {
                var now = Date.now();
                element.style.left = (element.offsetLeft + lengthMS * (now - start)) + 'px';
                duration -= now - start;
                if(duration <= 0) {
                    element.style.left = nextLeft + 'px';
                    clearInterval(slideTimer);
                    return;
                }
                now = start;
            }, 1000/60);
        }
    };
})();