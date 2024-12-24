'use client'
import TextField from "@/components/TextField"
import Link from "next/link"

export default function Signup(){
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
                    <form className="space-y-4 md:space-y-6" action="#">
                    <TextField label = 'username' labelFor ='username' name='username' placeholder="your username" required={true}></TextField>
                    <TextField label = 'first name' labelFor ='firstName' name='firstName' placeholder="your firstName" required={true}></TextField>
                    <TextField label = 'last name' labelFor ='lastName' name='lastName' placeholder="your lastName" required={true}></TextField>
                    <TextField label = 'email' labelFor ='email' name='email' placeholder="your email" required={true}></TextField>
                    <TextField label = 'password' labelFor ='password' name='password' type='password' placeholder="*****" isPassword={true} required={true}></TextField>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>)
}