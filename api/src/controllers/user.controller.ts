// import httpStatus  from 'http-status';
// import pick  from '../utils/pick';
import { Response, Request } from 'express';
import catchAsync from '../utils/catchAsync';
import { encrypt } from "../utils/encrypt";

import { UserResponce} from "../dtos/user.dto"; // Import UserDto from the correct path
import UserService from '../services/user.service';

const createUser =  catchAsync( async(req: Request, res: Response)=> {
    const { firstName,lastName, email, password} = req.body;
    const encryptedPassword = await encrypt.encryptpass(password);
    
    const user = await UserService.createUser(email,encryptedPassword,lastName,firstName);
    console.log(user)
    const userdataSent = new UserResponce(user)
    console.log(userdataSent)
    const token = encrypt.generateToken({ id: user.id ,email:user.email});
    return res
      .status(200)
      .json({ message: "User created successfully", token, userdataSent });
  } 
)


const getUsers = catchAsync(async (req:Request, res:Response) => {
  const users = await UserService.getUsers()
  res.send(users);

});


export {
  getUsers,
  createUser
};