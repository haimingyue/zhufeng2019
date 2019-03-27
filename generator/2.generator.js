// function* fns() {
//   let a = yield 1;
//   console.log(a);
//   let b = yield 2;
//   console.log(b);
//   return b;
// }
// let it = fns();
// it.next(); // undefined 第一次next传递参数是无意义的
// it.next('100'); // 100 第二低传递参数，会把结果传递给上一次yield的返回值
// it.next('200'); // 200

// // 需要先读取名字，通过name.txt中内容读取年龄。



// let fs = require('mz/fs');
// // let co = require('co');
// function co(it) { //express + coa 的中间件原理
//   return new Promise((resolve, reject) => {
//     // 如果是异步迭代，需要写个回调函数

//     function next(data) {
//       let {value, done} = it.next(data)
      
//         if(!done) {
//           value.then(data => {
//             next(data);
//           })
//         } else {
//           resolve(data);
//       }
//     };
//     next()
//   })
// }
// function* readAge() {
//   let content = yield fs.readFile('./name.txt', 'utf8')
//   let age = yield fs.readFile(content, 'utf8')
//   return age;
// }
// co(readAge()).then(data => {
//   console.log(data);

// })
// let it2 = readAge();
// let {value} = it2.next()
// value.then(data => {
//   console.log(data);
//   let { value } = it2.next(data)
//   value.then(data => {
//     it2.next(data)
//   })
// })
let fs = require('mz/fs');
async function readAge() { // 写接口 async + await + promise
  try {
    let content = await fs.readFile('./name1.txt', 'utf8')
    let age = await fs.readFile(content, 'utf8')
    return age;
  } catch (error) {
    console.log('err', error);
  }
}
// async 执行后返回的是peomise
readAge().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})