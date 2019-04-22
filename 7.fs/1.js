// fs file system 
// http 服务
let fs = require('fs');
let path = require('path');
// 文件的拷贝
fs.readFile(path.resolve(__dirname, './name.txt'), (err,data) => {
  fs.writeFile(path.resolve(__dirname, './name1.txt'), data, (err) => {
    console.log('写入成功');
    
  })   
})

// 流，边读边写，可以控制读取的速率


