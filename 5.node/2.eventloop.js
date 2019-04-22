// setTimeout(() => {
//   console.log('time');
// });

// console.log('start');

// process.nextTick(() => {
//   console.log('tick');
// })
// Promise.resolve().then(data => {
//   console.log('then');
  
// })

setTimeout(() => {
  console.log('timeout1');
  process.nextTick(() => {
    console.log('nextTick2');
  })
})

setTimeout(() => {
  console.log('timeout3');
})

process.nextTick(() => {
  console.log('nextTick1');
  setTimeout(() => {
    console.log('timeout2');
  })
  
})