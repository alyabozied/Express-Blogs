'use server';

import {
  FormState,
  LoginFormSchema,
  SignupFormSchema,
} from '@/app/auth/FormsDefinations';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';


export async function signup(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data 
  const { firstName ,lastName, email, password } = validatedFields.data;

  const response = await fetch(process.env.API_URL + '/v1/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' ,},
      body: JSON.stringify({ email, password,firstName,lastName }),
  })
  const data = await response.json();
  console.log(data)
  if(response.ok){
    (await cookies()).set("session" , data.token)
    redirect('/dashboard');
  }else{
    
    return {message:data.message}
  }
}

export async function login(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  const errorMessage = { message: 'Invalid login credentials.' };
  const successMessage = { ok:true ,  message: 'Success' };
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const {email , password} = validatedFields.data
  const response = await fetch( process.env.API_URL + '/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
  })

  if(response.ok){
    const data = await response.json();
    (await cookies()).set("session" , data.token)
    return successMessage
  }else{
    return errorMessage
  }

}


export async function logout() {
  const cookie = await cookies()
  cookie.delete('session');
  
}
