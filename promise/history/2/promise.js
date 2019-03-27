/*
 * @
 */
function Promise (excutor) {
  // 在promise中定义一个状态，就是当前promise的状态
  let self = this;
  self.value = undefined;
  self.reason = undefined;
  self.status = 'pending' // 默认promise的状态
  self.onResolvedCallbacks = [] // 存放成功时候的回调
  self.onRejectedCallbacks = [] // 存放失败时候的回调
  function resolve(value) {
    if(self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';  // 改变成成功态
      self.onResolvedCallbacks.forEach(fn => fn());
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected'; // 改变成失败态
      // 发布
      self.onRejectedCallbacks.forEach(fn => fn());
    }
  } 
  excutor(resolve, reject);
} 
Promise.prototype.then = function(onFulilled, onRejected) {
  let self = this;
  if(self.status === 'resolved') {
    onFulilled(self.value)
  }
  if(self.status === 'rejected') {
    onRejected(self.reason)
  }
  if(self.status === 'pending') {
    // 订阅
    self.onResolvedCallbacks.push(function() {
      onFulilled(self.value)
    })
    self.onRejectedCallbacks.push(function() {
      onRejected(self.reason)
    })
  }
}
module.exports = Promise;