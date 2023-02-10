import { vi, expect, describe, it } from "vitest";
import { HttpError, ValidationError } from "./errors";
import { sendDataRequest } from "./http";


describe("sendDataRequest()",()=>{
    const testResponseData = {testKey: 'testData'};
    const testFn = vi.fn((url, options)=>{
        return new Promise((resolve,reject)=>{
            if(typeof options.body !== 'string'){
                return reject('is not a string');
            }
            const testResponse = {
                ok: true,
                json(){
                    return new Promise((resolve, reject)=>{
                        resolve(testResponseData);
                    })
                }
            };
            resolve(testResponse);
        })
    });
    vi.stubGlobal('fetch', testFn);
    it("should return any available return data",()=>{
        const testData = {key: 'test'};
        return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
    });
    it("should convert sending data to json", async()=>{
        const testData = {key: 'test'};
        let errorMessage;
        try{
            await sendDataRequest(testData)
        }catch(errors){
            errorMessage = errors
        }
        
        return expect(errorMessage).not.toBe('is not a string');
    });
    it("should throw an httpError in case of non ok responses",()=>{
        testFn.mockImplementationOnce((url, options)=>{
            return new Promise((resolve,reject)=>{
                if(typeof options.body !== 'string'){
                    return reject('is not a string');
                }
                const testResponse = {
                    ok: false,
                    json(){
                        return new Promise((resolve, reject)=>{
                            resolve(testResponseData);
                        })
                    }
                };
                resolve(testResponse);
            })
        });
        const testData = {key: 'test'};
        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
    });
});