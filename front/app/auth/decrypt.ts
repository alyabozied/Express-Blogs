import * as jwt from "jsonwebtoken";

type Payload = {
    id:number,
    username:string
}
export default function decrpytjwt(token:string){
    return jwt.decode(token) as Payload
}
