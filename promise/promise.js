/*
 * @
 */


function Promise (excutor) {
  // 在promise中定义一个状态，就是当前promise的状态
  let self = this;
  self.value = undefined;
  self.reason = undefined;
  self.status = 'pending' // 默认promise的状态
  function resolve(value) {
    if(self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';  // 改变成成功态
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected'; // 改变成失败态
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
}
module.exports = Promise;