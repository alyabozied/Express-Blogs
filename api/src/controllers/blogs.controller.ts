import { Response, Request } from 'express';
import catchAsync from '../utils/catchAsync';
import BlogService from '../services/blog.service';
import { CustomRequest } from 'src/utils/request';
import { StatusCodes } from 'http-status-codes';

const createBlog =  catchAsync( async(req: CustomRequest, res: Response)=> {
    const {title , content } = req.body;
    const userID = req.userID
    if(!userID){
        return res.status(401).json({message:"unauthorzied user"})
    }
    await BlogService.createBlog(title,content , userID);
    return res.status(201).json({message:"created"})
  } 
)
const deleteBlog = catchAsync(async (req:CustomRequest ,res:Response)=>{
  const {id} = req.body

  const userId = req.userID
  if(!userId){
    return res.status(401).json({message:"unauthorzied user"})
  }
  await BlogService.deleteBlog(id , userId)
  return res.status(StatusCodes.OK).json({message:"blog deleted"})
})

const getBlogs = catchAsync(async (req:Request, res:Response) => {
  const blogs = await BlogService.getBlogs()
  return res.send(blogs);
});

const putBlog = catchAsync(async (req:CustomRequest, res:Response) => {
  const {content, title , id} = req.body
  const userId = req.userID
  if(!userId){
    return res.status(401).json({message:"unauthorzied user"})
  }
  await BlogService.updateBlog(id,userId,content,title)
  return res.status(201).json({message:"blog got put "});
});

const patchBlog = catchAsync(async (req:CustomRequest, res:Response) => {
  const {content, title , id} = req.body
  const userId = req.userID
  if(!userId){
    return res.status(401).json({message:"unauthorzied user"})
  }
  await BlogService.updateBlog(id,userId,content,title)
  return res.status(201).json({message:"blog got patch "});
});

export {
  getBlogs,
  createBlog,
  deleteBlog,
  putBlog,
  patchBlog
};