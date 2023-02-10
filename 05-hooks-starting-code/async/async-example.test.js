import { describe, expect, it, vi, afterEach} from 'vitest';

import { imprimeNumero, 
  generaNumero, 
  bajaVideo, 
  procesaVideo, 
  siMePortoBien,
  promesaCumplida,
  promesaRota,
  pideRegalo,
  presentState} from './async-example';

describe("sync callback", ()=>{
  describe("generaNumero()",()=>{
    it('should generate a value of type number', () => {
      const numero =  generaNumero();
      expect(numero).toBeTypeOf('number');
    });
    it('should return a number between a range', () => {
      const numero =  generaNumero();
      expect(numero).toBeGreaterThan(0);
      expect(numero).toBeLessThan(10);
    });
  });
  
  describe("imprimeNumero()",()=>{
    it('should receive a callback function', () => {
      const notFunction = 'a';
     const numberous = ()=> imprimeNumero(notFunction);
     expect(numberous).toThrow();
    });
  });
})

describe("Async callback", ()=>{
  describe("bajaVideo()",()=>{
    it('should generate a error if callback is not a function', () => {
        const url = 'video';
        const funErr = ()=> bajaVideo(url,'');
        expect(funErr).toThrow();
    });
    it('should generate error if url param is empty', () => {
      const url = '';
      const funErr = ()=> bajaVideo(url,procesaVideo);
      expect(funErr).toThrow();
    });
    it('should generate error if url is empty string in callback', (done) => {
      const url = 'video';
      bajaVideo(url,(url)=>{
        try{
          expect(url).toBeTypeOf('string');
          done();
        }catch(error){
          done(error);
        }
       
      });
      
    });
  });

  describe("procesaVideo()",()=>{
    it('should generate error if url param is empty', () => {
      const url = '';
      const funErr = ()=> procesaVideo(url);
      expect(funErr).toThrow();
    });
  });
  
});

describe("promises", ()=>{
  describe("si me porto bien()",()=>{
    it('it should receive a boolean parameter',() => {
      const behavior = 5;
      return expect(siMePortoBien(behavior)).rejects.toThrow();
    });
    it('it should resolve an object', () => {
      const behavior = true;
      return expect(siMePortoBien(behavior)).resolves.toBeTypeOf('object');
    });
    it('it should send message if reject', () => {
      const behavior = false;
      return expect(siMePortoBien(behavior)).rejects.toBeTypeOf('string');
    });
  });

  describe("promesaCumplida()",()=>{
    it('should receive object param', () => {
      const obj = '';
      const testFn = ()=> promesaCumplida(obj);
      expect(testFn).toThrow();
    });
  });

  describe("promesaRota()",()=>{
    it('should return error without a message of type string', () => {
      const msg = 1;
      const testFn = ()=> promesaRota(msg);
      expect(testFn).toThrow();
    });
  });
  describe("pideRegalo()",()=>{
    it('should set presentState: refusePresent if promesaRota', () => {
      const msg = 'refusePresent';
      pideRegalo();
      expect(presentState).toBe(msg);
    });
  });

  
})





