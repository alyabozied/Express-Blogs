import { NextFunction, Response } from "express";
import {CustomRequest} from '../utils/request'
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { payload } from "src/dtos/user.dto";
dotenv.config();

export const authentification = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decode = jwt.verify(token, process.env.JWT_SECRET || "hello") as payload;
  if (!decode) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.userID = decode.id;
  next();
};

