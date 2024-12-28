'use client'
import TextArea from "@/components/TextArea";
import TextField from "@/components/TextField";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/Button";

import React, { useActionState, useEffect } from "react";
import { editBlog } from "@/app/server-functions/blog";
import { useRouter } from "next/navigation";

type User = {
    id: number;
    firstName: string;
    lastName: string;
  };
type Blog = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: User;
};

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  export default function EditForm({blog}:{blog:Blog}){
    const [formState, action] = useActionState(editBlog, undefined);
    const router = useRouter();

    useEffect(() => {
      if (formState?.ok) {
        console.log(formState);
        router.push("/blog/" + formState.blogId);
      }
    }, [formState]);
  
    return (<section className="bg-gray-50 dark:bg-gray-900 h-screen-3/4 flex-grow">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        Your Blogs
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Edit a Blog
          </h1>
          <form className="space-y-4 md:space-y-6" action={action}>
            <input id="id" name="id" type="number" defaultValue={blog.id} hidden={true} ></input>
            <TextField
              label="title"
              labelFor="title"
              name="title"
              placeholder="title"
              value={blog.title}
            ></TextField>
            {formState?.errors?.title && (
              <p className="text-sm text-red-500">{formState.errors.title}</p>
            )}
            <TextArea
              label="content"
              labelFor="content"
              name="content"
              placeholder="content"
              value={blog.content}
            ></TextArea>
            {formState?.errors?.title && (
              <p className="text-sm text-red-500">{formState.errors.title}</p>
            )}
            {formState?.message && (
              <p className="text-sm text-red-500">{formState.message}</p>
            )}
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  </section>)
  }

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
        {pending ? "Submitting..." : "submit"}
      </Button>
    );
  }
  