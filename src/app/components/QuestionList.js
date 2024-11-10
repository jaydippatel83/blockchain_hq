import Link from "next/link";

export default function QuestionList() {
  const questions = [
    {
      id: 1,
      title: "Programmatically navigate using React router",
      date: "a day ago",
      author: "jaydip83.test",
      tags: ["reactjs", "react-router", "javascript"],
      likes: 1,
      comments: 2,
    },
    {
      id: 2,
      title: "Understanding useEffect dependencies in React",
      date: "2 days ago",
      author: "devguru98",
      tags: ["reactjs", "hooks", "javascript"],
      likes: 3,
      comments: 5,
    },
    {
      id: 3,
      title: "Difference between let, const, and var in JavaScript",
      date: "3 days ago",
      author: "code_master",
      tags: ["javascript", "es6", "variables"],
      likes: 8,
      comments: 10,
    },
    {
      id: 4,
      title: "How to optimize React application performance?",
      date: "4 days ago",
      author: "frontend_pro",
      tags: ["reactjs", "performance", "optimization"],
      likes: 7,
      comments: 3,
    },
    {
      id: 5,
      title: "What is Context API in React and when to use it?",
      date: "5 days ago",
      author: "react_dev",
      tags: ["reactjs", "context-api", "state-management"],
      likes: 4,
      comments: 6,
    },
    {
      id: 6,
      title: "How to implement authentication with Firebase in React?",
      date: "6 days ago",
      author: "firebase_fan",
      tags: ["reactjs", "firebase", "authentication"],
      likes: 5,
      comments: 8,
    },
    {
      id: 7,
      title: "How does JavaScript event delegation work?",
      date: "a week ago",
      author: "js_ninja",
      tags: ["javascript", "events", "dom"],
      likes: 9,
      comments: 4,
    },
    {
      id: 8,
      title: "Best practices for managing state in a large React app",
      date: "a week ago",
      author: "state_wizard",
      tags: ["reactjs", "state-management", "best-practices"],
      likes: 6,
      comments: 7,
    },
    {
      id: 9,
      title: "Difference between synchronous and asynchronous JavaScript",
      date: "8 days ago",
      author: "async_learner",
      tags: ["javascript", "async", "promises"],
      likes: 12,
      comments: 9,
    },
    {
      id: 10,
      title: "How to debounce a function in JavaScript?",
      date: "10 days ago",
      author: "debounce_guru",
      tags: ["javascript", "debounce", "functions"],
      likes: 10,
      comments: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">All Questions</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Most Liked</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                ▼
              </span>
            </div>
            <Link href="/post-question">
              <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
                Ask Question
              </button>
            </Link>
            {/* Profile Icon */}
            <Link href="/profile">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A9 9 0 1118.878 6.196 9 9 0 015.121 17.804z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {questions.map((question) => (
          <div
            key={question.id}
            className="flex items-start bg-white p-4 rounded-lg shadow mb-4"
          >
            <div className="flex flex-col items-center mr-4 space-y-2">
              {/* Likes Count and Icon */}
              <div className="flex items-center space-x-1">
                <span className="text-lg font-semibold">{question.likes}</span>
                <span className="text-gray-500">▲</span>
              </div>
              {/* Comments Count and Icon */}
              <div className="flex items-center space-x-1">
                <span className="text-lg font-semibold">{question.comments}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h6m-3 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
            </div>
            <Link href="questionDetail">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-600 cursor-pointer hover:underline">
                  {question.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {question.date} by <span className="text-blue-500">{question.author}</span>
                </p>
                <div className="flex space-x-2">
                  {question.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
