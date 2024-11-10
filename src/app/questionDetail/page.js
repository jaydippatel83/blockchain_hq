'use client'

import { useRouter } from 'next/router';

export default function QuestionDetail() {
  // const router = useRouter();
  // const { id } = router.query; // Retrieve question ID from the URL (if using dynamic routing)
  
  // Dummy question data
  const question = {
    // id,
    // id: id,
    title: "Programmatically navigate using React router",
    date: "a day ago",
    author: "jaydip83.test",
    tags: ["reactjs", "react-router", "javascript"],
    likes: 1,
    comments: 2,
    description:
      "I am trying to programmatically navigate between routes using React Router. I have tried using the `useHistory` hook, but I am facing issues with the route not updating correctly. Any help would be appreciated!",
  };

  // Dummy comments data
  const comments = [
    {
      id: 1,
      author: "dev_guru",
      date: "1 hour ago",
      content: "You can use the `useNavigate` hook in React Router v6.",
    },
    {
      id: 2,
      author: "react_master",
      date: "2 hours ago",
      content:
        "Make sure you are passing the correct path to `navigate`. This should work!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Question Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {question.title}
        </h1>

        {/* Question Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>Posted {question.date} by <span className="text-blue-500">{question.author}</span></span>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-lg font-semibold">{question.likes}</span>
              <span className="text-gray-500">▲</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-lg font-semibold">{question.comments}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-3 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex space-x-2 mb-4">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Question Description */}
        <div className="text-gray-800 text-base mb-8">
          <p>{question.description}</p>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-300 pt-6">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                <span>
                  <span className="text-blue-500">{comment.author}</span> - {comment.date}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}

          {/* Add Comment Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
            <textarea
              placeholder="Write your comment here..."
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-indigo-500"
            ></textarea>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
