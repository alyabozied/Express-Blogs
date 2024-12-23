// import httpStatus  from 'http-status';
import { Response, Request } from 'express';
// import pick  from '../utils/pick';
import ApiError  from '../utils/apiError';
import catchAsync from '../utils/catchAsync';
import { User }  from '../entity/user.entity';
import { myDataSource } from "../app-data-source"

// const createUser = catchAsync(async (req:Request, res:Response) => {
//   const user = await userService.createUser(req.body);
//   res.status(httpStatus.CREATED).send(user);
// });

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
  
};
