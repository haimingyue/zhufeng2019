// 观察和被观察 被观察者要放在观察者中
// 被观察者要提供一个更新方法，当被观察者发生变化时，需要执行观察者的update方法

function Observer() {
  this.state = '不开心的';
  this.arr = [];
}
Observer.prototype.attach = function(s) {
  
  this.arr.push(s)
}
Observer.prototype.setState = function(newState) {
  this.state = newState;
  // s指代的事Subjedt的实例
  this.arr.forEach(s => s.update(this.state));
}
function Subject(name, target) {
  this.name = name;
  this.target = target;
}

Subject.prototype.update = function(newState) {
  console.log(this.name + '监控' + newState)
}

let o = new Observer();             // 被观察者
let s1 = new Subject('我', o);      // 观察者
let s2 = new Subject('我媳妇', o);   // 观察者
o.attach(s1)
o.attach(s2)

o.setState('开心')
o.setState('不开心')