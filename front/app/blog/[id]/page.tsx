import decrpytjwt from "@/app/server-functions/decrypt";
import { Bounded } from "@/components/Bounded";
import { Button } from "@/components/Button";
import NavLink from "@/components/Link";
import { cookies } from "next/headers";
import DeleteButton from "./deleteButton"
import Link from "next/link";
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
export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const blogId = (await params).id;
  const session = (await cookies()).get("session")?.value || " ";
  const {id } = decrpytjwt(session);
  const blog: Blog = await getServerSideProps(blogId);
  return (
    <>
      <Bounded>
        <NavLink
          url="/dashboard?page=1&limit=2"
          text="&larr; Back to articles"
          isCurrent={false}
        ></NavLink>
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
        {blog.content.split("\n").map((elem, i) => {
          return (
            <section
              key={"para" + i}
              className="px-4 py-8 md:px-6 md:py-10 lg:py-12"
            >
              <div className="text-xl mx-auto w-full max-w-3xl">{elem}</div>
            </section>
          );
        })}
      </article>
      <div className="conatiner place-self-center">
        <div className="flex w-1/2 justify-between mx-auto">
          {blog.user.id === id ? (
            <DeleteButton id={blogId}></DeleteButton>
            ) : (
            " "
          )}
          {blog.user.id === id ? (
            <Button className="w-40 p-5">
              <Link href={`/blog/edit/${blogId}`}>
                edit
                </Link>
            </Button>
          ) : (
            " "
          )}
        </div>
      </div>
    </>
  );
}

async function getServerSideProps(id: number) {
    console.log(id)
  const session = (await cookies()).get("session");
  try {
    const response = await fetch(process.env.API_URL + "/v1/blogs/" + id, {
      method: "get",
      headers: {
        Authorization: `Bearer ${session?.value}`,
      },
    });
    const blog = await response.json();
    console.log(blog)
    if (!response.ok) {
      throw new Error("not authorized");
    }

    return {
      ...blog,
    };
  } catch (error) {
    console.log(error);
    return {
      blogs: "",
    };
  }
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
