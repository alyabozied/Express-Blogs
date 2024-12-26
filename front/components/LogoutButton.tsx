'use client';

import { logout } from '@/app/auth/auth';
import { useRouter } from 'next/navigation';
export default function LogoutButton() {
    const router = useRouter()
    return (
        <button
            className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:hover:bg-gray-700 dark:hover:text-white text-gray-900 dark:text-white"
            onClick={() => {

                router.push("/login")
                logout();
            }}
        >      Logout
        </button>
    );
}