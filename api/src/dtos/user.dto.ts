import { User } from "src/entity/user.entity";

class UserResponce {
    name: string;
    email: string;
    constructor (user:User){
        this.name = user.firstName + user.lastName;
        this.email = user.email;
    }
}

class UserCreateRequest {
    firstName:string;
    lastName:string;
    email:string;
    password:string;

}
class payload {
    id:number;
    username:string;
}

export {
    UserResponce,
    payload
};