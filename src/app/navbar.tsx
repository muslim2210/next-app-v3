"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();

  return (
    <nav className="fixed z-50 flex top-0 w-full bg-gray-800 py-5 px-11 justify-between shadow-lg">
      <div className="flex">
        <h1 className="text-white text-2xl mr-8">Navbar</h1>
        <ul className="flex ml-10 items-center text-lg">
          <Link href="/">
            <li
              className={`mr-6 ${
                pathname === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-6 ${
                pathname === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-6 ${
                pathname === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
          <Link href="/product">
            <li
              className={`mr-6 ${
                pathname === "/product" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Product
            </li>
          </Link>
          <Link href="/dashboard">
            <li
              className={`mr-6 ${
                pathname === "/dashboard" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Dashboard
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <button
            className="bg-white text-sm rounded-md px-3 py-2"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-white text-sm rounded-md px-3 py-2"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
