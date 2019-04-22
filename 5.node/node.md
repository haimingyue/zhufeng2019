# node runtime

- 让javascript代码运行在服务端，基于v8，不包含js全局
- node中包含ecmascript，读写文件
- 提供简单、高性能的服务器。
- cpu密集 vs i/o密集型
- 分配单位，靠的是进程，进程就是一个环境，环境中可以开很多线程（主线程都是单线程）
- node中的api都是异步的，底层是多线程模拟的异步，libuv

- java 多线程 （不停的切换执行上下文，切换的快） 并发操作同一个文件 锁的概念

## node

- 异步 / 同步
- 阻塞 / 非阻塞

> npm node package manager(安装包)

> nvm version 包管理器

> nrm registery 源


## node 事件环
- 微任务的概念 （promise.then < process.nextTick）只要队列发生切换时，就会执行微任务。
- 主执行栈
- timers 时间 settimeout的回调
- poll 轮询 i/o的回调
- check setImmediate 方法

> 默认会从上到下依次执行，如果代码执行到poll后，发现没有check阶段。就在poll中等待到达时间后清空代码。

> 切换队列，把队列清空

> poll 阶段的下一个阶段是check，如果check队列中有东西，会先执行check