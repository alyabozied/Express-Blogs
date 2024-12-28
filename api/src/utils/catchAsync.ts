import { Request, Response, NextFunction } from 'express';

// const catchAsync = <T extends (...args: any[]) => Promise<any>>(fn: T) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   };
// };

const catchAsync = (fn : (req:Request<any>,res:Response,next:NextFunction) => Promise<any>) =>(req:Request,res:Response,next:NextFunction) =>{
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));

}
export default catchAsync;