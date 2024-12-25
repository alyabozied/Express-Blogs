import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
import { payload } from "../dtos/user.dto";

dotenv.config();
const { JWT_SECRET = "" } = process.env;
export class encrypt {
  static async encryptpass(password: string) {
    try{

      
      const hashed = await bcrypt.hash(password,12);
      return hashed;
    }
    catch(err){
      console.log(err)
    }
    return ""
  }
  static async comparepassword(hashPassword: string, password: string) {
    return await bcrypt.compareSync(password, hashPassword);
  }

  static generateToken(payload: payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  }
}