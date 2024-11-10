// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">QnA Platform</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/ask">Ask Question</Link>
        <Link href="/answer">Answer Question</Link>
      </div>
    </nav>
  );
};

export default Navbar;
