// 可读、 可写 、双工 、 转化流

let fs = require('fs');
let path = require('path');

let rs = fs.createReadStream(path.resolve(__dirname, 'name.txt'), {
  flag: 'r',
  highWaterMark: 3,
  encoding: null,
  autoClose: false,
  start: 1,
  end: 5
})

// 默认流是暂停模式，非流动模式，内部监听有没有触发data事件
let arr =[]
rs.on('data', function(chunk) {
  arr.push(chunk)
  console.log(chunk)
})

rs.on('end', function() {
  console.log(Buffer.concat(arr).toString());
})

// data
// end
// error
// resume
// pause
