export default function Hero() {
    return (
      <section className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Welcome to Blockchain HQ</h1>
          <p className="text-xl mb-8 animate-fadeIn delay-200">
            Empowering knowledge exchange in the blockchain space with expert insights and rewarding connections.
          </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold shadow-lg transition transform hover:scale-105">
              Get Started
            </button>
        </div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </section>
    );
  }
  