'use client'
import { Button } from "@/components/Button";
import { useAppContext } from "@/context";

export default function Home() {
  const {state} = useAppContext()

  return (
    <section className="bg-gray-50 dark:bg-transparent flex-grow h-screen-3/4">
        <div className="flex flex-col items-center container justify-center mt-200 mx-auto  overflow-y-auto">
            <div className="p-4 w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <h2 className="text-4xl pt-10 capitalize">Welcome {state.username} </h2>
                <Button className="mt-4 w-full h-20">
                    creat a new blog
                </Button>
                </div>
            </div>
        </div>
    </section>
    
  );
}
