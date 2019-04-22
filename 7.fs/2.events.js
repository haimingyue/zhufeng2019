// let EventEmitter = require('events');

class EventEmitter {
  constructor() {
    this._events = {}
  }
  on(eventName, callback) {
    if(this._events[eventName]) {
      this._events[eventName].push(callback)
    } else {
      this._events[eventName] = [callback]
    }
  }
  emit(eventName) {
    this._events[eventName].forEach(fn => {
      fn();
    });
  }
}


let e = new EventEmitter();

e.on('吃饭', function() {
  console.log('吃米饭');
  
})

e.on('吃饭', function() {
  console.log('吃肉');
  
})

e.emit('吃饭');