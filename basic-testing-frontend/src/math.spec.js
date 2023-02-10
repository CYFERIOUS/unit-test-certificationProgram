import { expect, it } from "vitest";
import { add } from "./math.js";

    it("should return the sum of all values in the array",()=>{
        const numbers = [1,2];
        const result = add(numbers);
        const expectedResult = numbers.reduce((accum,currentV)=>{ return accum + currentV},0);
        expect(result).toBe(expectedResult);
    });

    it("should yield NaN if at least one invalid number is provided",()=>{
        const numbers = ['invalid',1];
        const result = add(numbers);
        
        expect(result).toBeNaN();
    });

    it("should yields correct sum if any of numeric strings values is provided",()=>{
        const numbers = ['1','2'];
        const result = add(numbers);
        const expectedResult = numbers.reduce((accum,currentV)=>{ return +accum + +currentV},0);
        expect(result).toBe(3);
    });

    it("should yields 0 if any empty array is provided",()=>{
        const numbers = [];
        const result = add(numbers);
        expect(result).toBe(0);
    });
    it("should throw an error if no value is provided",()=>{
        const resultFn = ()=>{
            add();
        } 
        expect(resultFn).toThrow();
    });

    it("should throw an error if  is provided multiple arguments",()=>{
        const a = 1;
        const b = 2;
       
        const resultFn = ()=>{
            add(a,b);
        } 
        expect(resultFn).toThrow(/is not iterable/);
    });

   