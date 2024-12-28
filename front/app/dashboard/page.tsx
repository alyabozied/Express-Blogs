import { cookies } from "next/headers";
import Articale from "@/components/Articale";
import { Bounded } from "@/components/Bounded";
import NavLink from "@/components/Link";

type User = {
  firstName: string;
  lastName: string;
};
type Props = {
  count:number,
  blogs: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: User;
  }[];
};

export default async function Dashboard({params , searchParams}:any) {
  const page = (await searchParams).page
  const limit = (await searchParams).limit
  const props: Props = await getServerSideProps(page , limit);
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
                id = {element.id}
              ></Articale>
            </div>
          );
        })}
      </ul>
      <div className="flex justify-between p-5" >
        <NavLink url={`/dashboard?page=${Math.max(parseInt(page)-1,1)}&limit=${limit}`} text="pervious" isCurrent={false}/>
        <NavLink url={`/dashboard?page=${Math.min(parseInt(page)+1,props.count/parseInt(limit,10))}&limit=${limit}`} text="next" isCurrent={false} />
        
      </div>

      
    </Bounded>
  );
}
async function getServerSideProps(page:number = 1 , limit?:number ) {
  const session = (await cookies()).get("session");
  try {
    console.log(process.env.API_URL + "/v1/blogs?" +`page=${page}&limit=${limit}`)
    const response = await fetch(process.env.API_URL + "/v1/blogs?" +`page=${page}&limit=${limit}` , {
      method: "get",
      headers: {
        Authorization: `Bearer ${session?.value}`,
      },
    });
    const blogs = await response.json();
    if (!response.ok) {
      throw new Error("not authorized");
    }
    return {
      blogs:blogs.blogs,
      count:blogs.count
    };
  } catch (error) {
    return {
      count:0,
      blogs: [],
    };
  }
}
