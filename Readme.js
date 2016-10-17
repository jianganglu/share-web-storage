// 返回一个整数，表示存储在Storage对象中的数据项的数量
localStorage.length;
// 该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。
localStorage.key(index);
// 该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
localStorage.setItem('key', 'value');
// 该方法接受一个键名作为参数，返回键名对应的值。
localStorage.getItem('key');
// 该方法接受一个键名作为参数，并把该键名从存储中删除。
localStorage.removeItem('key');
// 调用该方法会清空存储中的所有键名。
localStorage.clear();


<html manifest="cache.appcache">

CACHE MANIFEST
# version 1.0.0
# 缓存 - 定义了哪些资源是浏览器可以缓存的
CACHE:
/html5/src/logic.js
/html5/src/style.css
/html5/src/background.png
#网络 - 定义了哪些资源是需要用户在线才能使用的
NETWORK:
*

var request = window.indexedDB.open("MyTestDatabase");
var request = indexedDB.open("MyTestDatabase", 3);

request.onerror = function(event) {
  // Do something with request.errorCode!
};
request.onsuccess = function(event) {
  // Do something with request.result!
};

// 该事件仅在较新的浏览器中被实现
request.onupgradeneeded = function(event) { 
  // 更新对象存储空间和索引 .... 
};

