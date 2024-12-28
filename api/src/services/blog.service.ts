import ApiError from "../utils/apiError";
import { myDataSource } from "../app-data-source";
import { Blog }  from '../entity/blog.entity';
import httpStatus  from "http-status";
import UserService from "./user.service";
export default class BlogService{
    static blogRepository = myDataSource.getRepository(Blog);
    static createBlog = async (title:string , content:string , userID:number) =>{
        const blog = new Blog();
        blog.title = title;
        blog.content = content;
        const user = await UserService.getUser(userID)
        if(!user){
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized')
        }
        blog.user = user;
        
        await this.blogRepository.save(blog);
        return blog
    }
    static getBlogs = async(page: number =1 , limit?:number)=>{
        const count = await this.blogRepository.count();
        if(!limit || limit === -1){
            const blogs = await this.blogRepository.find({relations:{user:true}})    
            return {blogs,count}
        }
        page = page > 1 ? page : 1 
        
        const blogs = await this.blogRepository.createQueryBuilder('blog')
                                               .leftJoinAndSelect("blog.user" , "user")
                                               .skip((page-1) * limit)
                                               .take(limit)
                                               .getMany()
                                    
        return {blogs,count}
    }
    static deleteBlog = async(id:number,userId:number)=>{
        const blog = await this.getBlog(id);
        if(!blog){
            throw new ApiError(httpStatus.NOT_FOUND, 'The blog doesn\'t exist')
        }
        if(userId !== blog.user.id){
            throw new ApiError(httpStatus.UNAUTHORIZED, 'This blog doesn\'t belong to this user')
        }
        await this.blogRepository.delete(id)    
    }
    
    static getBlog = async(id:number)=>{
        const blog = await this.blogRepository.findOne({
            where:{id},
            relations: {
                    user: true,
            }, 
        })
        return blog
    }

    static updateBlog = async(id:number , userId:number,content?:string,title?:string)=>{
        
        const blog =await this.getBlog(id)
        if(!blog){
            throw new ApiError(httpStatus.NOT_FOUND, 'The blog doesn\'t exist')
        }
        if(userId !== blog.user.id){
            throw new ApiError(httpStatus.UNAUTHORIZED, 'This blog doesn\'t belong to this user')
        }

        blog.content = content? content: blog.content;
        blog.title = title? title: blog.title;
        
        await this.blogRepository.save(blog)
        
    }
}