import Navbar from "@/components/Navbar";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

export default function ProfilePage() {
  const user = {
    name: "Jaydip Patel",
    username: "jaydip83",
    bio: "Full Stack Developer | React Enthusiast | JavaScript Ninja. Passionate about building scalable applications and learning new technologies.",
    location: "Ahmedabad, India",
    joinedDate: "May 2020",
    questions: [
      {
        id: 1,
        title: "Programmatically navigate using React router",
        date: "a day ago",
        tags: ["reactjs", "react-router", "javascript"],
      },
      {
        id: 2,
        title: "Understanding useEffect dependencies in React",
        date: "2 days ago",
        tags: ["reactjs", "hooks", "javascript"],
      },
      {
        id: 3,
        title: "Difference between let, const, and var in JavaScript",
        date: "3 days ago",
        tags: ["javascript", "es6", "variables"],
      },
    ],
  };

  return (
    <>
    <Navbar/>

    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-4xl font-bold rounded-full flex items-center justify-center shadow-lg">
            {user.name[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-lg text-gray-600">@{user.username}</p>
            <div className="flex items-center space-x-4 mt-2 text-gray-500">
              <div className="flex items-center space-x-1">
                <HiOutlineLocationMarker className="w-5 h-5" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <HiOutlineCalendar className="w-5 h-5" />
                <span>Joined {user.joinedDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Bio</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">{user.bio}</p>
        </div>

        {/* Recent Questions */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800">Recent Questions</h2>
          <div className="mt-4 space-y-4">
            {user.questions.map((question) => (
              <div
                key={question.id}
                className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-md"
              >
                <h3 className="text-blue-600 font-semibold text-lg cursor-pointer hover:underline">
                  {question.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{question.date}</p>
                <div className="flex space-x-2 mt-2">
                  {question.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
