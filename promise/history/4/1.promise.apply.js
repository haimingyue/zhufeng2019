/*
 * new Promsie 可以夹杂着异步逻辑
 * 同一个实例可以多次then
 */
// let Promise = require('./promise')
let p = new Promise(function(resolve, reject) {
  resolve('情人节到了');
})
// 值的穿透
p.then().then().then(data => {
  console.log(data);
})
