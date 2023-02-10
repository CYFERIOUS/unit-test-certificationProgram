import { extractDataForm } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResult, outputResult } from './src/output.js';

const form = document.querySelector('form');


function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractDataForm(form);
  const result = calculateResult(numberValues);
  const resultText = generateResult(result);
  outputResult(resultText);
  
}

form.addEventListener('submit', formSubmitHandler);
