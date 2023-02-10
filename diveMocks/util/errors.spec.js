import { vi, expect, describe, it } from "vitest";
import { HttpError, ValidationError } from "./errors";


describe("class HttpError constructor()",()=>{
    it("should receive 3 params at least",()=>{
        const error = ()=> new HttpError();
        expect(error).toThrow();
    });
    it("should assign 3 values at least",()=>{
        const status = 200;
        const message = 'succesful conection';
        const data = {};
        const errorData = new HttpError(status,message,data);
       
        expect( errorData.statusCode).toBeTypeOf('number');
        expect( errorData.message).toBeTypeOf('string');
        expect( errorData.data).toBeTypeOf('object');
    });
});

describe("class ValidationError constructor()",()=>{
    it("it should receive at least one param",()=>{
        const emptyString = '';
        const validate = ()=> new ValidationError(emptyString);
        expect(validate).toThrow();
    });
    it("should assign message with the param",()=>{
        const testMessage = 'testMessage';
        const validate =  new ValidationError(testMessage);
        expect(validate.message).toBe(testMessage);
    });

})