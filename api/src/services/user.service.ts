import ApiError from "../utils/apiError";
import { myDataSource } from "../app-data-source";
import { User }  from '../entity/user.entity';
import httpStatus  from "http-status";
export default class UserService{
    static createUser = async (email:string , password:string , lastName:string , firstName:string) =>{
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        const userRepository = myDataSource.getRepository(User);
        const alreadyExisted = await userRepository.findOne({where:{email}})
        if( alreadyExisted != null)
            throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken')
        await userRepository.save(user);
        return user
    }
    static getUsers = async()=>{
        const userRepository = myDataSource.getRepository(User);
        const users = await userRepository.find()
        return users
    }
    static getUser = async(id:number)=>{
        const userRepository = myDataSource.getRepository(User);
        const user = await userRepository.findOne({where:{id}})
        return user
    }

}