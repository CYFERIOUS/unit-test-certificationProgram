import { describe, expect, it } from "vitest";
import{generateResult,outputResult} from './output.js'

describe('generateResult()',()=>{
    
    it("should return invalid input if invalid word is received", ()=>{
        const invalidString = 'invalid';
        const validateText =  generateResult(invalidString);
        expect(validateText).toBe('Invalid input. You must enter valid numbers.');
    });

    it("should return nothing if empty string is passed", ()=>{
        const emptyValue = '';
        const validateText =  generateResult(emptyValue);
        expect(validateText).toBe('Result: ');
    });

    it("should return result value if  number is passed", ()=>{
        const validValue = 1;
        const validateText =  generateResult(validValue);
        expect(validateText).toBe('Result: 1');
    });
});