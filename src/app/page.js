 
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

// Reusable Feature Card Component
const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

// Reusable Step Card Component
const StepCard = ({ step, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="text-2xl font-bold text-blue-600 mb-2">Step {step}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

// Reusable Expert Card Component
const ExpertCard = ({ name, title, expertise, imgSrc }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <img src={imgSrc} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-gray-600 mb-2">{title}</p>
    <p className="text-blue-600 font-semibold">{expertise}</p>
  </div>
);
