import { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
    message: string
  }
export default function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
    if(!req.cookies.session){
      res.status(401).json({message:"not authorized"})
    }
    return  res.status(200).json({message:"hello"})
  }
  