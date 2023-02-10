export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
  if (RegExp(/^\p{L}/,'u').test(value) ) {
    throw new Error('Invalid input - must not be a character.');
  }
}

export function validateNumber(number) {
  if (isNaN(number) || typeof number !== 'number') {
    throw new Error('Invalid number input.');
  }
}
