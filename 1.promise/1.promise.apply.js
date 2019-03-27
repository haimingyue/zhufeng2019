let fs = require('fs');
// let bluebird = require('bluebird')
// let readFile = bluebird.promisify(fs.readFile);


function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fs(...args, function(err, data) {
        if(err) reject(err);
        resolve(data);
      });
    })
  }
}




let readFile = promisify(fs.readFile);

Promise.all([1, readFile('./name.txt', 'utf8'), readFile('./age.txt','utf8')]).then(data => {
  console.log(data)
}, err => {
  console.log(err)
})