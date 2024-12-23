class UserResponce {
    name: string;
    email: string;
    
}

class UserCreateRequest {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}
class payload {
    id:number;
}

export {
    UserResponce,
    payload
};