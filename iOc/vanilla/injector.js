const Injector = new class {
    
    #weakmap = new WeakMap();
    register(klass, instance) {
    if(!this.#weakmap.has(klass)) {
      this.#weakmap.set(klass, instance);
    }
  }
  
    getService() {}
  
    clear() {}
  }
  export { Injector };