'use client'

import TextField from "@/components/TextField";
import Link from "next/link";
import React, { useActionState, useEffect } from "react";
import { useAppContext } from '@/context';
import { login } from '@/app/auth/auth';
import {useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation'
export default function Login(){
    const {setState} = useAppContext()
    const router = useRouter()
    const [formState, action] = useActionState(login, undefined);
    useEffect(()=>{
        if(formState?.ok){
            setState({isLoggedIn:true})
            router.push("/dashboard")
        }
    },[formState])
    return (
    
        <section className="bg-gray-50 dark:bg-gray-900 h-screen-3/4 flex-grow">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Your Blogs
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action={action}>
                    <TextField label = 'email' labelFor ='email' name='email' placeholder="your email" ></TextField>
                    {formState?.errors?.email && (<p className="text-sm text-red-500">{formState.errors.email}</p>)}
                    <TextField label = 'password' labelFor ='password' name='password' type='password' placeholder="*****" isPassword={true} ></TextField>
                    {formState?.errors?.password && (<p className="text-sm text-red-500">{formState.errors.password}</p>)}
                    {formState?.message && (<p className="text-sm text-red-500">{formState.message}</p>)}
                        <LoginButton/>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don&apos;t have an account yet? <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export function LoginButton() {
    const { pending } = useFormStatus();
    return (
      <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
        {pending ? 'Submitting...' : 'Sign in'}
      </Button>
    );
  }