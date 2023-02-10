import { it, expect, vi } from 'vitest';
import { writeData } from './src/util/io.js';
import {promises as fs } from 'fs';

vi.mock('fs');
vi.mock('path', ()=>{
    return {
        default:{
            join: (...args)=>{
                return args[args.length-1]
            }
        }
    }
});

it("should execute the writeFile method", ()=>{
    const testData = 'dummydummy';
    const testFileName = 'dummy.txt';
   writeData(testData, testFileName);
    expect(fs.writeFile).toBeCalled();
});
it("should execute the writeFile method with params", ()=>{
    const testData = 'dummydummy';
    const testFileName = 'dummy.txt';
   writeData(testData, testFileName);
    expect(fs.writeFile).toBeCalledWith(testFileName,testData);
});

it("should return a promise that resolves true if its called", ()=>{
    const testData = 'dummydummy';
    const testFileName = 'dummy.txt';
    writeData(testData, testFileName);
    return expect(writeData(testData, testFileName)).resolves.toBe('true');
});