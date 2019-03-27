/*
 * new Promsie 可以夹杂着异步逻辑
 * 同一个实例可以多次then
 */
let Promise = require('./promise')
let p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('情人节到了');
  }, 1000)
})
p.then((value) => {
  console.log('success', value)
}, (reason) => {
  console.log('err', reason)
})
p.then((value) => {
  console.log('success', value)
}, (reason) => {
  console.log('err', reason)
})
console.log('end')