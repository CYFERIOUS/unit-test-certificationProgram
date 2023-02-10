import { vi, expect, describe, it, beforeEach } from "vitest";
import { extractPostData } from "./posts";


    const testTitle = 'test title est';
    const testContent = 'test content est';
    let formData;

describe('extractPostData()',()=>{
    
    beforeEach(()=>{
        formData = {
            title: testTitle,
            content: testContent,
            get(key){
                return this[key];
            },
        };
    });
    it('should extract tittle and content from the form',()=>{
        
        const returnedData = extractPostData(formData);
        expect(returnedData.title).toBe(testTitle);
        expect(returnedData.content).toBe(testContent);
    })
});