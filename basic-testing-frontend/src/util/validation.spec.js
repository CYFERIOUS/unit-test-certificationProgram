import {  expect, it, describe } from "vitest";
import { validateStringNotEmpty ,validateNumber } from "./validation.js";


    describe("validateStringNotEmpty()",()=>{
        it("validate string throw an error if its length is > 0",()=>{
            const emptyString = '';
            const validateFun = () => validateStringNotEmpty(emptyString);
            expect(validateFun).toThrow(/must not be empty/);
        });
    
        it("validate string throw an error if its a character instead a number",()=>{
            const charString = 'a';
            const validateFun = () => validateStringNotEmpty(charString);
            expect(validateFun).toThrow(/must not be a character/);
        });
    });

   

    describe("validateNumber()",()=>{
        it("validate number throw an error if its a empty input ",()=>{
            const charString = '';
            const validateFun = () => validateNumber(charString);
            expect(validateFun).toThrow(/Invalid number/);
        });
    
        it("validate number throw an error if its not type of number ",()=>{
            const charString = '1';
            const validateFun = () => validateNumber(charString);
            expect(validateFun).toThrow(/Invalid number/);
        });
    });
   