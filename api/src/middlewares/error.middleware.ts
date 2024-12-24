import { StatusCodes } from 'http-status-codes';
import ApiError from '../utils/apiError';
import { Request,Response,NextFunction } from 'express';

const errorHandler = (err:ApiError, req:Request, res:Response, next:NextFunction) => {
  let { statusCode, message } = err;
  console.log(statusCode,message)
  if (process.env.NODE_ENV === 'production' && !err.isOperational) {
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    message = StatusCodes[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };

  res.status(statusCode).send(response);
};

export {
  errorHandler,
};
