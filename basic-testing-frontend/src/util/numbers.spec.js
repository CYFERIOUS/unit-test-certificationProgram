import { describe, expect, it } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers.js";

describe("transformToNumber()",()=>{
    it("should be casted to number",()=>{
        const stringNumber = '1';
        const transNumber = transformToNumber(stringNumber);
        const isNumber = typeof transNumber;
        expect(isNumber).toBe('number');
    });
    it("should be zero if not parameter is passed",()=>{
        const stringNumber = '';
        const transNumber = transformToNumber(stringNumber);
        expect(transNumber).toBe(0);
    });
    it("should be Nan if  parameter is not a number",()=>{
        const stringNumber = 'a';
        const transNumber = transformToNumber(stringNumber);
        expect(transNumber).toBeNaN();
    });
});

describe("cleanNumbers()",()=>{
    it("should return an array with number types",()=>{
        const stringNumbers = ['1','2'];
        const transNumber = cleanNumbers(stringNumbers);
        const isNumber = typeof transNumber[0];
        expect(isNumber).toBe('number');
    });

    it("should be an error if receive empty array",()=>{
        const emptyArray = ['','2'];
        const validateFun = () =>  cleanNumbers(emptyArray);
        expect(validateFun).toThrow();
    });
    
});
    

  

    