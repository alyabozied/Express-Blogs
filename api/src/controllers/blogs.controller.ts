import { Response, Request } from 'express';
import catchAsync from '../utils/catchAsync';
// import { UserResponce} from "../dtos/user.dto"; // Import UserDto from the correct path
import BlogService from '../services/blog.service';
import { CustomRequest } from 'src/utils/request';

const createBlog =  catchAsync( async(req: CustomRequest, res: Response)=> {
    const {title , content } = req.body;
    const userID = req.userID
    console.log("hello")
    if(!userID){
        return res.status(401).json({message:"unauthorzied user"})
    }
    const blog = await BlogService.createBlog(title,content , userID);
    console.log(blog)
    console.log("we made it ")
    return res.status(201).json({message:"created"})
    // const userdataSent = new UserResponce(user)
    // console.log(userdataSent)
    // const token = encrypt.generateToken({ id: user.id ,email:user.email});
    // return res
    //   .status(200)
    //   .json({ message: "User created successfully", token, userdataSent });
  } 
)


const getBlogs = catchAsync(async (req:Request, res:Response) => {
  const users = await BlogService.getBlogs()
  return res.send(users);

});


export {
  getBlogs,
  createBlog
};