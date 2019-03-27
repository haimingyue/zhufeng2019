/*
 * new Promsie 可以夹杂着异步逻辑
 * 同一个实例可以多次then
 */
let Promise = require('./promise')
let p = new Promise(function(resolve, reject) {
  // setTimeout(function() {
    resolve('情人节到了');
  // }, 1000)
})
// 判断then函数的结果和promise2的关系
let promise2 = p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(3000)
        })
      }))
    }, 1000)
  })
})
promise2.then(data => {
  console.log(data)
}, err => {
  console.log('e', err);
}) 



// 链式: 如果一个then方法，返回一个普通值，这个值传递给下一次then作为成功的结果
// 链式: 不是普通值，promise或者报错了
// 链式: 如果返回的事promise，会根据promise是成功还是失败，决定下一个then是成功还是失败
// 链式: 捕获错误，默认找离自己最近的then失败，找不到就往下找
// 链式: jquery，链式调用return this；promise调用then后返回新的promise

// 支持了异步的promise
// promise 的优点是链式调用









// let fs  = require('fs');


// function readFile(url) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(url, 'utf8', function(err, data) {
//       if(err) reject(err)
//       resolve(data)
//     })
//   })
// }

// readFile('./name.txt').then((data) => {
  // readFile(data).then((data => {
  //   console.log(data)
  // })) 
  // return 100;
  // throw new Error('error')
  // return new Promise((resolve, reject) => {
  //   setTimeout(function() {
  //     // resolve('haha')
  //     reject('55')
  //   })
  // })
//   return readFile(data + 1)
// }, (err) => {
//   console.log(err)
// }).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log('c', err);
// })