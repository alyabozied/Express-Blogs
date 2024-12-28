
import { cookies } from "next/headers";
import EditForm from "./form";
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
export default async function EditBlogForm({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const blogId = (await params).id;
  const blog: Blog = await getServerSideProps(blogId);

  return (
    <EditForm blog = {blog}></EditForm>
  );
}


async function getServerSideProps(id: number) {
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