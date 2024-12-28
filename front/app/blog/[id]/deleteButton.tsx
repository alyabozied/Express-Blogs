"use client"
import {deleteBlog} from "@/app/server-functions/blog";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function DeleteButton({id}:{id:number}){
    const router = useRouter();
    return <Button  onClick={()=>{
        deleteBlog(id).then(()=>{
            router.push("/dashboard?page=1&limit=2")
        }).catch(err=>console.log(err))
    }} className="w-40 mr-5 p-5">delete</Button>
}