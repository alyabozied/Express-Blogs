import { cookies } from "next/headers";
import Articale from "@/components/articale";
import { Bounded } from "@/components/Bounded";
type User = {
  firstName: string;
  lastName: string;
};
type Props = {
  blogs: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: User;
  }[];
};

export default async function Dashboard() {
  const props: Props = await getServerSideProps();
  return (
    <Bounded size="widest">
      <ul className="grid grid-cols-1 gap-16">
        {props.blogs.map((element) => {
          return (
            <div key={`blog${element.id}`} className="bg-slate-200 rounded-lg p-5">
              <Articale
                title={element.title}
                content={element.content}
                username={element.user.firstName + " " + element.user.lastName}
                date = {element.createdAt}
              ></Articale>
            </div>
          );
        })}
      </ul>
    </Bounded>
  );
}
async function getServerSideProps() {
  const session = (await cookies()).get("session");
  try {
    const response = await fetch(process.env.API_URL + "/v1/blogs", {
      method: "get",
      headers: {
        Authorization: `Bearer ${session?.value}`,
      },
    });
    const blogs = await response.json();
    console.log(blogs);
    if (!response.ok) {
      throw new Error("not authorized");
    }

    return {
      blogs,
    };
  } catch (error) {
    console.log(error);
    return {
      blogs: [],
    };
  }
}
