// generator 生成器，用来生成迭代器的

//Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Symbol(Symbol.iterator) : 自定义迭代器
function fns() {
  // 给类数组添加迭代方法
  let obj = {
    0: 1, 
    1: 2,
    2: 3,
    length: 3,
    // 迭代器的概念
    [Symbol.iterator]: function() {
      let index = 0;
      let that = this;
      return {
        // 有next方法
        next() {
          return {
            value: that[index],
            // done返回true的时候结束
            done: index++ == that.length
          }
        }
      }
    }
  }
  let arr = [...obj];
  console.log(Array.isArray(arr), arr)
}


fns(1, 2, 3)
// 普通函数加个 * 就变成generator函数
// 生成器生成的迭代器
// * 会配合yield来使用，(翻译: 产出)
function * read() {
  yield 1;
  yield 2;
  return 100;
}

let r = read();

console.log(r.next()); //{ value: 1, done: false }
console.log(r.next()); //{ value: 2, done: false }
console.log(r.next()); //{ value: 100, done: true }
function fns() {
  // 给类数组添加迭代方法
  let obj = {
    0: 1, 
    1: 2,
    2: 3,
    length: 3,
    // 迭代器的概念
    [Symbol.iterator]: function*() {
      let that = this;
      let index = 0;
      while(index !== that.length) {
        yield that[index++]
      }
    }
  }
  let arr = [...obj];
  console.log(Array.isArray(arr), arr)
}

fns(1, 2, 3)