
/*
 * 全局属性
 * exports
 * module
 * require
 * __dirname
 * __filename
 * 模块化(命名冲突，代码方便维护，方便协作)
 * 浏览器中实现模块化 var obj = {} 不能完全解决命名冲突
 * 闭包-自执行函数实现 seajs cmd requirejs amd
 * commonjs规范。通过文件读取实现模块化
 * 1) 文件即模块
 * 2) 定义了导出方式 module.exports exports
 * 3) 定义了导入方式 require
 * 让字符串执行？ eval / new Function
 * eval 执行有依赖关系
 */

 /*
 * 内置模块
 * 内置 / 核心
 * 文件模块 / 自定义模块
 * 第三方模块
 * 
 * 
 */

// (function() {
//   module.exports = Promise;
//   return module.exports
// })()
 
let vm = require('vm'); // node中执行字符串

let hello = 'zf';

vm.runInThisContext("console.log(hello)")

