export class HttpError {
  constructor(statusCode, message, data) {
    if((statusCode || message || data) === undefined){
        throw new Error('not valid data is arriving from server')
    }else{
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
    }
    
  }
}

export class ValidationError {
  constructor(message) {
    if(message === ''){
        throw new Error('empty message is returned');
    }
    this.message = message;
  }
}