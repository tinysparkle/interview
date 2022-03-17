1. Ajax

   1. 技术统称

   code: XMLHttpRequest 实现Ajax
      function ajax1(url, cb) {
         const xhr = new XMLHttpRequest();
         xhr.open('GET', url, false);
         xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
               if (xhr.status == 200) {
                  cb(xhr.responseText);
               }
            }
         }
         xhr.send(null);
      }

2. Fetch

   1. 浏览器原生api

   2. 和XMLHttpRequest一个级别

   3. Fetch语法更加简洁，易用，支持promise
   code:
      function ajax2(url) {
         return fetch(url).then(res => res.json())
      }
      
3. axios

   1. 是一个lib（库）

   2.  内部使用XMLHttpRequest和Fetch来实现

### lib和Api的区别
   - lib有很多个， 依赖于api