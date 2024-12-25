import {Response ,Request } from "express";
import { CustomRequest } from "src/utils/request";
import { myDataSource } from "../app-data-source";
import { User } from "../entity/user.entity";
import { encrypt } from "../utils/encrypt";
import catchAsync from "../utils/catchAsync";
import { UserResponce } from "../dtos/user.dto";


 const login = catchAsync (async(req: Request, res: Response)=> {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(500)
          .json({ message: " email and password required" });
      }

      const userRepository = myDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email }  });
      if(!user) {
        return res.status(404).json({message:"email or the password are incorrect"})
      }
      const isPasswordValid = await encrypt.comparepassword(user.password, password);
      if (!user || !isPasswordValid) {
        return res.status(404).json({message:"email or the password are incorrect"})
      }
      const token = encrypt.generateToken({ id: user.id,email:user.email });
      const userdataSent = new UserResponce(user)
      return res.status(200).json({ message: "Login successful",userdataSent, token });
  })

const getProfile = catchAsync (async (req: CustomRequest, res: Response)=> {
    if (!req["userID"]) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userRepository = myDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: req.userID },
    });
    return res.status(200).json({ ...user, password: undefined });
})

export = {login , getProfile}