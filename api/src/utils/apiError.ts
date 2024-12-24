
class ApiError extends Error {
    statusCode:number;
    isOperational:boolean;
    
    constructor(statusCode:number, message:string, stack = '') {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = process.env.NODE_ENV != "development" ;
      if (stack || this.isOperational) {
        
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ApiError;  