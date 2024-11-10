export default function HowItWorks() {
    return (
      <section className="py-20 px-6 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">How Blockchain HQ Works</h2>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 max-w-5xl mx-auto">
          <div className="flex-1 bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Step 1: Register</h3>
            <p>Create an account as a general user or an expert to start your journey.</p>
          </div>
          <div className="flex-1 bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Step 2: Post a Question</h3>
            <p>Set a bounty and post your query to receive responses from trusted experts.</p>
          </div>
          <div className="flex-1 bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Step 3: Connect</h3>
            <p>Get your questions answered or book a one-on-one call for in-depth assistance.</p>
          </div>
        </div>
      </section>
    );
  }
  