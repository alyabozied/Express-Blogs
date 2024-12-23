// import httpStatus  from 'http-status';
// import pick  from '../utils/pick';
import { Response, Request } from 'express';
import ApiError  from '../utils/apiError';
import catchAsync from '../utils/catchAsync';
import { User }  from '../entity/user.entity';
import { encrypt } from "../utils/encrypt";
import { myDataSource } from "../app-data-source";
import { UserResponce} from "../dtos/user.dto"; // Import UserDto from the correct path

const createUser =  catchAsync( async(req: Request, res: Response)=> {
    const { firstName,lastName, email, password} = req.body;
    const encryptedPassword = await encrypt.encryptpass(password);
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = encryptedPassword;

    const userRepository = myDataSource.getRepository(User);
    await userRepository.save(user);
    // Use the UserResponse DTO to structure the data being sent in the response
    const userdataSent = new UserResponce()
    userdataSent.name = `${user.firstName} ${user.lastName}`;
    userdataSent.email= user.email;
    
    const token = encrypt.generateToken({ id: user.id });

    return res
      .status(200)
      .json({ message: "User created successfully", token, userdataSent });
  } 
)


const getUsers = catchAsync(async (req:Request, res:Response) => {
  // const filter = pick(req.query, ['name', 'role']);
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const users = await myDataSource.getRepository(User).find()
  res.send(users);
});

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

export {
  getUsers,
  createUser
};