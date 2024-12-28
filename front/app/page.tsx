"use client";
import { Button } from "@/components/Button";
import { useAppContext } from "@/context";
import Link from "next/dist/client/link";

export default function Home() {
  const { state } = useAppContext();
  const content = state.isLoggedIn ? (
    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
      <h2 className="text-4xl pt-10 capitalize">Welcome {state.username}</h2>
      <Link href="/blog/new">
        <Button className="mt-4 w-40 h-20">create a new blog</Button>
      </Link>
    </div>
  ) : (
    <div>
      <h2 className="text-4xl pt-10 capitalize">Hi please login in</h2>
      <Link href="/login">
        <Button className="mt-4 w-40 h-20">log in</Button>
      </Link>
    </div>
  );
  return (
    <section className="bg-gray-50 dark:bg-transparent flex-grow h-screen-3/4">
      <div className="flex flex-col items-center container justify-center mt-200 mx-auto  overflow-y-auto">
        <div className="p-4 w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {content}
        </div>
      </div>
    </section>
  );
}
