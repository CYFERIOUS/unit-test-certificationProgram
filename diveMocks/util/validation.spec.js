import { vi, expect, describe, it } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()",()=>{
    it("should receive an empty string",()=>{
        const textError = '';
        const testFun = ()=> validateNotEmpty(textError);
        expect(testFun).toThrow();
    });
    it("should receive at least 2 params",()=>{
        const textError = 'value';
        const testFun = ()=> validateNotEmpty(textError);
        expect(testFun).toThrow();
    });
    it("should show the error message",()=>{
        const textError = '';
        const errorMessage = 'errorMessage';
        const testFun = ()=> validateNotEmpty(textError, errorMessage);
        expect(testFun).toThrow('errorMessage');
    });
    it("should throw an error if empty string is full of white spaces",()=>{
        const textError = '   ';
        const errorMessage = 'white spaces';
        const testFun = ()=> validateNotEmpty(textError, errorMessage);
        expect(testFun).toThrow(errorMessage);
    });
})