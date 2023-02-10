import fs from 'fs';
import path from 'path';
import { vi, expect, describe, it, beforeEach } from "vitest";
import { showError } from "./dom";
import {Window} from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;
vi.stubGlobal('document',document);

beforeEach(()=>{
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
});

describe('showError()',()=>{
    it('should receive at least one param',()=>{
        const testFn = ()=> showError();
        expect(testFn).toThrow();
    });
   
    it('should add <p>> in the error div',()=>{
        const message = 'test';
        showError(message);
        const testEelement = document.getElementById('errors');
        const errorP = testEelement.firstElementChild;
        expect(errorP).not.toBeNull();
    });
    it('should not have <p> in the error div',()=>{
        const testEelement = document.getElementById('errors');
        const errorP = testEelement.firstElementChild;
        expect(errorP).toBeNull();
    });
    it('should show message in the error <p>',()=>{
        const testMessage = 'testMessage';
        showError(testMessage);
        const testEelement = document.getElementById('errors');
        const errorP = testEelement.firstElementChild;
        expect(errorP.innerHTML).toBe(testMessage);
    });

});