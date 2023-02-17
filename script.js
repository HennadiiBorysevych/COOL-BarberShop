// Promise.reject('a')
//   .catch(p => p + 'b')
//   .catch(p => p + 'c')
//   .then(p => p + 'd')
//   .finally(p => p + 'e')
//   .then(p => console.log(p));
// let a = {};
// function me(params) {
//   params.x = 40;
//   params = null;
// }
// me(a);
// console.log('🚀 ~ file: script.js:8 ~ a', a);

// setTimeout(() => {
//   console.log("1");
// }, 0);
// Promise.resolve("2").then(console.log);

// console.log("3");

// var a = 'hello';

// function b() {
//   if (false) {
//     var a = 'world';
//   } else {
//     var b = 'man';
//   }
//   console.log(b);
//   console.log(a);
// }
// b();

// var x = 10;
// function bar(par) {
//   var x = 30;
//   par();
// }
// function foo() {
//   console.log(x);
// }

// bar(foo);

// let v = new Array('a', 'b');
// console.log(v);

// class GodLisner {
//   constructor() {
//     this.counter = 0;
//   }

//   handleClick() {
//     this.counter += 1;
//     console.log(this.counter);
//   }
// }

// const element = document.getElementById("test");
// const listener = new GodLisner();
// element.addEventListener("click", listener.handleClick);

// const map = new Map();

// map.set('0', '1');
// map.set('s2', '2s');
// map.set('3s', 's3');

// const arr = [...map.values()];
// const res = arr.map(value => parseInt(value, 10));
// console.log('🚀 ~ file: script.js:72 ~ res', res);

// const s1 = ['a', 'b', 'c'];
// const s2 = ['d', 'e', 'f'];

// const res = s1.concat(s2).join('+');
// console.log('🚀 ~ file: script.js:79 ~ res', res);
// const str = 'h2h40h';
// const res = str
//   .split('h')
//   .map(s => s + 10)
//   .filter(s => s.length < 4);
// console.log('🚀 ~ file: script.js:81 ~ res', res);
// function sayHi() {
//   phrase = 'Привет'; // (*)

//   if (false) {
//     var phrase;
//   }

//   alert(phrase);
// }
// sayHi();

// var obj = {
//   a: () => {
//     console.log(this);
//   },
//   prop: 1,
// };
// obj.a();
// var fn = obj.a.bind(obj);
// fn();
