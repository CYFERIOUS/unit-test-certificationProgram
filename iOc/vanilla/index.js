// import { Service } from './service.js';

// class ServiceA {
//   greet() {
//     console.log('hello world');
//   }
// }

// Service(ServiceA);


const wm1 = new WeakMap();
const o1 = {};
wm1.set(o1, 37);
console.log(wm1);