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

// 这个规范是通用的，我们的promise会在别的promise中使用
function resolvePromise (promise2, x, resolve, reject) {
  if(promise2 === x) { // 防止自己等待自己
    return reject(new TypeError('循环引用了'));
  }
  // 保证当前x是一个引用类型
  let called; //表示当前是否别调用过
  if((x !== null && typeof x === 'object') || typeof x === 'function') {
    // 很有可能是一个promise
    try {
      let then = x.then; //then属性具有getter，此时获取会发生异常
      if(typeof then === 'function') {
        // 就是认为是promise
        then.call(x, (y) => { // y 有可能是一个promise
          if(called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject)
          //resolve(y) // 拿到成功的结果，让promise2变成成功态
        }, (r) => {
          if(called) return;
          called = true;
          reject(r)
        })
      }  else {
        // 认为普通的对象
        resolve(x)
      }
    } catch(e) {
      if(called) return;
      called = true;
      reject(e)
    }
  } else {
    resolve(x); //普通值直接成功即可
  }
}
Promise.prototype.then = function(onFulilled, onRejected) {
  let self = this;
  // 调用then 后需要再次返回一个全新的promise
  // 需要拿到当前then方法， 成功或者失败的结果
  let promise2 = new Promise(function(resolve, reject) {
    if(self.status === 'resolved') {
      setTimeout(() => {
        // 这里需要promise2. 所以需要增加异步，保证可以获取到promise2
        try {
          let x = onFulilled(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch(e) {
          reject(e) // 如果执行函数时，抛出失败，name会走向下一个then的失败状态
        }
      })
    }
    if(self.status === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRejected(self.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch(e) {
          reject(e)
        }
      })
    }
    if(self.status === 'pending') {
      // 订阅
      self.onResolvedCallbacks.push(function() {
        setTimeout(() => {
          try {
            let x = onFulilled(self.value)
            resolvePromise(promise2, x, resolve, reject)
  
          } catch(e) {
            reject(e)
          }

        })
        
      })
      self.onRejectedCallbacks.push(function() {
        setTimeout(() => {
          try {
            let x = onRejected(self.reason)
            resolvePromise(promise2, x, resolve, reject)
  
          } catch(e) {
            reject(e)
          }
        })
        
      })
    }
  });
  return promise2;
}
module.exports = Promise;