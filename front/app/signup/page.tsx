'use client'
import { Button } from "@/components/Button";
import TextField from "@/components/TextField"
import Link from "next/link"
import { useAppContext } from '@/context';
import { signup } from '@/app/server-functions/auth';
import {useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation'
import React, { useActionState, useEffect } from "react";

export default function Signup(){
    const {setState} = useAppContext()
    const router = useRouter()
    const [formState, action] = useActionState(signup, undefined);
    useEffect(()=>{
        if(formState?.ok){
            setState({isLoggedIn:true,username:formState.username,id:formState.id})
            router.push("/dashboard?page=1&limit=2")
        }
    },[formState])
    return (<section className="bg-gray-50 dark:bg-gray-900 h-screen-3/4 flex-grow">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Your Blogs
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Make a new user
                    </h1>
                    <form className="space-y-4 md:space-y-6" action={action}>
                    
                    <TextField label = 'first name' labelFor ='firstName' name='firstName' placeholder="your firstName" required={true}></TextField>
                    {formState?.errors?.lastName && (<p className="text-sm text-red-500">{formState.errors.lastName}</p>)}

                    
                    <TextField label = 'last name' labelFor ='lastName' name='lastName' placeholder="your lastName" required={true}></TextField>
                    {formState?.errors?.firstName && (<p className="text-sm text-red-500">{formState.errors.firstName}</p>)}

                    
                    <TextField label = 'email' labelFor ='email' name='email' placeholder="your email" required={true}></TextField>
                    {formState?.errors?.email && (<p className="text-sm text-red-500">{formState.errors.email}</p>)}

                    
                    <TextField label = 'password' labelFor ='password' name='password' type='password' placeholder="*****" isPassword={true} required={true}></TextField>
                    {formState?.errors?.password && (<p className="text-sm text-red-500">{formState.errors.password}</p>)}
                    {formState?.message && (<p className="text-sm text-red-500">{formState.message}</p>)}

                        <SignUp/>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>)
}
function SignUp() {
    const { pending } = useFormStatus();
    return (
      <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
        {pending ? 'Submitting...' : 'Sign up'}
      </Button>
    );
  }