import { Injector } from './injector.js';
const Service = (klass) => {
    const instance = new klass();
    console.log(instance);
    Injector.register(klass, instance);
  }
  export { Service };