 
import Navbar from "@/components/Navbar";
import Link from "next/link";
 


import QuestionList from './components/QuestionList';

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <QuestionList />
    </div>
  );
}
 