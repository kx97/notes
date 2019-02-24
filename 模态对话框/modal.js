(function() {
  document.ready(function() {
    var btn = document.querySelector(".btn");
    var dialogDiv = document.querySelector("#dialogDiv");
    var text = dialogDiv.innerHTML;
    btn.onclick = function() {
      show();
      var closeBtn = document.querySelector(".close-btn"); 
      closeBtn.onclick = function() {
        close();
      };
    };

    function show() {
      var str = '';
      str += '<div class="dialog-cover"></div>';
      str += '<div class="dialog">';
      str += ' <div class="dialog-h">';
      str += '  <h3>对话标题</h3>';
      str += '  <i class="close-btn">X</i>';
      str += ' </div>';
      str += ' <div class="dialog-b">';
      str +=    text;
      str += ' </div>';
      str += '</div>';

      dialogDiv.innerHTML = str;
      dialogDiv.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.body.style.height = "100%";
    }

    function close() {
      dialogDiv.innerHTML = text;
      dialogDiv.style.display = 'none';
      document.body.style.overflow = 'visible';
      document.body.style.height = "auto";
    }
  });
})();