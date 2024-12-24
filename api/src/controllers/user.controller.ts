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
    const userdataSent = new UserResponce(user)
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
  
  
  
  // const getUser = catchAsync(async (req:Request, res:Response) => {
  //   const user = await userService.getUserById(req.params.userId);
  //   if (!user) {
  //     throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  //   }
  //   res.send(user);
  // });
  
  // const updateUser = catchAsync(async (req:Request, res:Response) => {
  //   const user = await userService.updateUserById(req.params.userId, req.body);
  //   res.send(user);
  // });
  
  // const deleteUser = catchAsync(async (req:Request, res:Response) => {
  //   await userService.deleteUserById(req.params.userId);
  //   res.status(httpStatus.NO_CONTENT).send();
  // });
};