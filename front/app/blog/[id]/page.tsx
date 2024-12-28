import { Bounded } from "@/components/Bounded";
import NavLink from "@/components/Link";
import { cookies } from "next/headers";
type User = {
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
export default async function BlogPage({
    params,
  }: {
    params: Promise<{ id: number }>
  }){
    const id = (await params) . id 
    const blog: Blog = await getServerSideProps(id);

    return   <>
        <Bounded>
            <NavLink url="/dashboard?page=1&limit=2" text="&larr; Back to articles" isCurrent={false}>
            </NavLink>
        </Bounded>
    <article>
        <Bounded>
        <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 dark:text-white md:text-4xl">
            {blog.title}
        </h1>
        <p className="font-serif italic tracking-tighter text-slate-500 dark:text-gray-300">
            {dateFormatter.format(new Date(blog.createdAt))}
        </p>
        </Bounded>
        {
            
            blog.content.split("\n").map(elem=>{
                return <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                    <div className="text-xl mx-auto w-full max-w-3xl">
                        {elem}
                    </div>
                </section>
            })
        }
    </article>
    </>
}

async function getServerSideProps(id:number) {
    const session = (await cookies()).get("session");
    try {
      const response = await fetch(process.env.API_URL + "/v1/blogs/" + id, {
        method: "get",
        headers: {
          Authorization: `Bearer ${session?.value}`,
        },
      });
      const blog = await response.json();
      
      if (!response.ok) {
        throw new Error("not authorized");
      }
  
      return {
        ...blog
      };
    } catch (error) {
      console.log(error);
      return {
        blogs: "",
      };
    }
  }
  
  export const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });