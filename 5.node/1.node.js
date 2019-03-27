/*
 * global
 * window 代理了 global
 * process 进程 （当前运行的一个环境）
 * buffer 可以读取的内容，都是二进制的，16进制，主要是内存、缓存
 * 隐藏属性
 */
//process.cwd();  //当前工作目录，在哪里执行文件，就可以打印出位置
//process.env;    //enviroment
// 开发环境
//process.argv;   // arguments
//prodess.nextTick; // 下一队列

console.log(process.env);
