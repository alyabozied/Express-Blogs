import Joi,{SchemaLike} from 'joi';
import httpStatus from 'http-status';
import ApiError from '../utils/apiError';
import { Request,Response,NextFunction } from 'express';
import pick from '../utils/pick';
const validate = (schema:Joi.SchemaLike) => (req:Request, res:Response, next:NextFunction) => {
    const refinedReq = pick(req,['body'])
    const { value, error } = Joi.compile(schema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(refinedReq);
   console.log(error)
  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  return next();
};

export default validate;