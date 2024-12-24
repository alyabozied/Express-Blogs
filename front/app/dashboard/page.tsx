// import { GetServerSidePropsContext } from "next";
// import { cookies } from "next/headers";
// type Props = {
//     user: {
//         email:string;
//         username:string
//     }
// }
export default function Dashboard() {
    return (
      <div>
        dashboard
      </div>
    );
  }
// export async function getServerSideProps(context:GetServerSidePropsContext) {
//     const session = (await cookies()).get("session")?.value
//     console.log(process.env.API_URL)
//     if (!session) {
//       return {
//         redirect: {
//           destination: '/login',
//           permanent: false,
//         },
//       };
//     }
//     // Verify the token and fetch user data (e.g., from an API or database)
//   try {
//     const response = await fetch(process.env.API_URL + "/v1/users", {
//       headers: {
//         Authorization: `Bearer ${session}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to authenticate');
//     }

//     const user = await response.json();

//     return {
//       props: {
//         user,
//       },
//     };
//   } catch (error) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }
// }