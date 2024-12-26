import ApiError from "../utils/apiError";
import { myDataSource } from "../app-data-source";
import { Blog }  from '../entity/blog.entity';
import { User } from "src/entity/user.entity";
import httpStatus  from "http-status";
import UserService from "./user.service";
export default class BlogService{
    static createBlog = async (title:string , content:string , userID:number) =>{
        const blog = new Blog();
        blog.title = title;
        blog.content = content;
        const user = await UserService.getUser(userID)
        if(!user){
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized')
        }
        blog.user = user;
        const blogRepository = myDataSource.getRepository(Blog);        
        await blogRepository.save(blog);
        return blog
    }
    static getBlogs = async()=>{
        const blogRepository = myDataSource.getRepository(Blog);
        const blogs = await blogRepository.find()
        return blogs
    }

}