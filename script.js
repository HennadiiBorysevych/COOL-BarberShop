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
// console.log(a);

// setTimeout(() => {
//   console.log('1');
// }, 0);
// Promise.resolve('2').then(console.log);

// console.log('3');

// let a = 'hello';

// (function b() {
//   console.log(b);
//   let b = 'man';
//   console.log(a);
// })();
// b();

// var x = 10;
// var x = 20;
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

// const element = document.getElementById('test');
// const listener = new GodLisner();
// console.log(listener);
// element.addEventListener('click', listener.handleClick);

// const map = new Map();

// map.set('0', '1');
// map.set('s2', '2.7s');
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

/*Планете Темпос сегодня 1000 лет. На календаре 10.01.1001, среда. Поселение было основано в воскресенье.
В календаре Темпоса есть небольшие отличия от земного. 12 месяцев по 28 дней. А в феврале високосного года 29. 
Год будет считается високосным если он кратен 5, но из тех что кратны 100 високосными будут только те, что кратны 500.
 Например 200, 300, 400 - невисокосный, 500 - високосный.
Определите какой день недели на Темпосе по любой заданной дате. */
