import { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";

type ResponseData = {
    message: string,
    username?:string
    id?:number
  }
type Payload = {
    id:number,
    username:string
}
export default function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
    if(!req.cookies.session){
      res.status(401).json({message:"not authorized"})
    }
    const payload = jwt.decode(req.cookies['session']||"") as Payload
    return  res.status(200).json({username:payload.username,id:payload.id , message:"hello"})
  }
  