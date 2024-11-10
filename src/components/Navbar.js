// components/Navbar.js
'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginButton from "./LoginButton";

const Navbar = () => {
    const router = useRouter();
  return (
    <nav className="flex justify-between p-4 bg-gray-200 text-black">
      <h1 className="text-lg font-bold">Blockchain HQ</h1>
      <div className="flex gap-4">
        <Link href="/" className={router.pathname === "/" ? "bg-blue-500" : ""}>Home</Link>
        <Link href="/register" className={router.pathname === "/register" ? "bg-blue-500" : ""}>Register</Link>
        <Link href="/dashboard" className={router.pathname === "/dashboard" ? "bg-blue-500" : ""}>Dashboard</Link>
        <Link href="/ask" className={router.pathname === "/ask" ? "bg-blue-500" : ""}>Ask Question</Link>
        <Link href="/answer" className={router.pathname === "/answer" ? "bg-blue-500" : ""}>Answer Question</Link>
        <LoginButton/>
      </div>
    </nav>
  );
};

export default Navbar;
