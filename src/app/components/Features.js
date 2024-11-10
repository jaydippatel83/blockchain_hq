export default function Features() {
    return (
      <section className="py-20 px-6 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features of Blockchain HQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-gray-50 rounded-xl shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">Ask and Earn</h3>
            <p>Post questions with bounties and get high-quality answers from blockchain experts.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">One-on-One Calls</h3>
            <p>Book direct calls with experts to get tailored insights and advice on blockchain topics.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">Flexible Pricing</h3>
            <p>Experts set their own rates for answering questions or booking calls, allowing personalized services.</p>
          </div>
        </div>
      </section>
    );
  }
  