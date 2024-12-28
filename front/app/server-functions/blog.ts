'use server';

import {
  BlogFormState,
  BlogFormSchema
} from '@/app/server-functions/FormsDefinations';
import { cookies } from 'next/headers';

export async function createBlog(
  state: BlogFormState,
  formData: FormData,
): Promise<BlogFormState> {
  // 1. Validate form fields
  const validatedFields = BlogFormSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data 
  const { title ,content} = validatedFields.data;
  const token = (await cookies()).get("session")?.value;
  const response = await fetch(process.env.API_URL + '/v1/blogs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' ,'Authorization':`Bearer ${token}`},
      body: JSON.stringify({ title, content }),
  })
  const data = await response.json();
  if(response.ok){
    const successMessage = { ok:true ,  message: 'Success' ,blogId:data.id};
    return successMessage
  }else{
    return {message:data.message}
  }
}
export async function deleteBlog(blogId:number){
    const token = (await cookies()).get("session")?.value;
    const response = await fetch(process.env.API_URL + '/v1/blogs/', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' ,'Authorization':`Bearer ${token}`},
        body: JSON.stringify({ id:blogId }),
    })
    const data = await response.json();
    if(response.ok){
      const successMessage = { ok:true ,  message: 'Success' ,blogId:data.id};
      return successMessage
    }else{
      return {message:data.message}
    }
}


export async function editBlog(
  state: BlogFormState,
  formData: FormData,
): Promise<BlogFormState> {
  // 1. Validate form fields
  const validatedFields = BlogFormSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    id: formData.get('id')
  });
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // 2. Prepare data 
  const { id , title ,content} = validatedFields.data;
  console.log("this is the title " , title)
  const token = (await cookies()).get("session")?.value;
  const response = await fetch(process.env.API_URL + '/v1/blogs/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' ,'Authorization':`Bearer ${token}`},
      body: JSON.stringify({ id:parseInt(id,10) , title, content }),
  })
  const data = await response.json();
  if(response.ok){
    const successMessage = { ok:true ,  message: 'Success' ,blogId:data.id};
    return successMessage
  }else{
    return {message:data.message}
  }
}
