"use client"
// import { cookies } from 'next/headers'
import { useAppContext } from '@/context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './Link';
import ThemeToggle from './ThemeButton';
import LogoutButton from './LogoutButton';
export default function Navbar() {
    const  onLogout =  ()=>{
        setState({isLoggedIn:false})
    }
    const pathName = usePathname()
    const loginSignUpLinks = (
        <>
            <li>
                <NavLink text="Login" url="/login" isCurrent={pathName == "/login"}/>
            </li>
            <li>
                <NavLink text="Sign up" url="/signup" isCurrent={pathName == "/signup"} />
            </li>
        </>
    )
    const logoutLink = (
        <li>
            <div onClick={onLogout}>
                <LogoutButton/>
            </div>

        </li>
    )
    const {state,setState}  = useAppContext();

    return (
        

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-end justify-end mx-auto p-4">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex  items-end flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <div>
                            <NavLink text="Home" url="/" isCurrent={pathName === "/"}/>
                        </div>
                        <div>
                            <NavLink text="Dashboard" url="/dashboard" isCurrent={pathName === "dashboard"}/>
                        </div>
                        <div>
                            <NavLink text="About" url="/about" isCurrent={pathName === "about"}/>
                        </div>
                        {
                            state.isLoggedIn?logoutLink:loginSignUpLinks
                        }
                        {/* <ThemeToggle/> */}
                    </ul>
                </div>
            </div>
        </nav>

    )
}