 
import Navbar from "@/components/Navbar";
import Link from "next/link";
// import Link from 'next/link';
// import QuestionList from './components/QuestionList';

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-6">Welcome to Blockchain HQ</h1>
//       <p className="text-lg mb-8 text-center max-w-md">
//         Connect with experts and get answers to your blockchain-related questions.
//       </p>
//       <Link href="/post-question">
//         <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
//           Ask a Question
//         </button>
//       </Link>

//       <QuestionList/>

//     </div>
//   );
// }


import QuestionList from './components/QuestionList';

export default function HomePage() {
  return (
    <div>
      <QuestionList />
    </div>
  );
}
 