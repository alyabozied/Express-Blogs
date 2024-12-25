'use client'
import { FormEvent } from 'react'
import TextField from "@/components/TextField";
import Link from "next/link";
import React from "react";
// import { useRouter } from 'next/router'

export default function Login(){
    // const router = useRouter()
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        
        const response = await fetch('http://127.0.0.1:4000/v1/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
            'Access-Control-Allow-Origin':'*'},
            body: JSON.stringify({ email, password }),
        })
        
        if (response.ok) {
            // router.push('/profile')
            console.log("tmamt")
            console.log(await response.json())
        } else {
            // Handle errors
            console.log("error")
        }
    }
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
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <TextField label = 'email' labelFor ='email' name='email' placeholder="your email" required={true}></TextField>
                    <TextField label = 'password' labelFor ='password' name='password' type='password' placeholder="*****" isPassword={true} required={true}></TextField>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={false}/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
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