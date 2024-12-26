import { cookies } from 'next/headers';
import Card from '@/components/card'

type Props = {
  blogs: {
    id: number,
    title: string,
    content: string ,
    createdAt: Date,
    updatedAt:Date
  }[];
};
// export default function Dashboard() {
//   return <div></div>;
// }
export default async function Dashboard() {
  const props:Props = await getServerSideProps()
  return <div className='mx-10 my-10 grid grid-cols-2 gap-2'>
    {
      props.blogs.map((element)=>{
        return (<div>
          <Card title={element.title} content ={element.content}></Card>
        </div>)
      })
    }
  </div>;
}
async function getServerSideProps(){
  const session = (await cookies()).get("session")
  try {
    const response = await fetch(process.env.API_URL + "/v1/blogs", {
      method:"get",
      headers: {
        Authorization: `Bearer ${session?.value}`,
      },
    });
    const blogs = await response.json();
    console.log(blogs)
    if (!response.ok) {
      throw new Error("not authorized");
    }


    return {
        blogs,
    };
  } catch (error) {
    console.log(error)
    return {
      blogs:[]
      }
  };
}

