import { Request } from "express";
interface CustomRequest extends Request { 
    userID?:number; 
}

export{ 
    CustomRequest
}