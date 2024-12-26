'use clients'
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";

export default function NavLink({url,text,isCurrent}:{url:string , text:string , isCurrent:boolean}){
    const pathName = usePathname()

    
    return <Link href={url} 
                className={"block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:hover:bg-gray-700 dark:hover:text-white " + (pathName===url ? "md:text-blue-700 md:dark:text-blue-500" :"text-gray-900 dark:text-white") }
                >
                {text}
            </Link>
}