/*
 * @作用: 解决异步问题
 * @Promise 是一个类
 * @自己实现一个流程
 * @new promise时，需要传递一个executor，执行器。执行期会被立即调用
 * @resolve 也是一个函数, reject 也是一个函数
 * promise 是一个承诺，承诺能不能成，不知道。默认的状态是pending
 * 调用resolve表示成功了，调用reject表示失败了
 * 每一个promise都有一个实例方法 then
 * 可以从等待态 转化成 成功或者失败状态，不可逆转
 */
let Promise = require('./promise')
let p = new Promise(function(resolve, reject) {
  console.log('start')
  // resolve('情人节到了');
  reject('情人节到了');
  resolve('情人到了');
})
p.then((value) => {
  console.log('success', value)
}, (reason) => {
  console.log('err', reason)
})
console.log('end')