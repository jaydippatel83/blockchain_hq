 
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Connect with Experts in the Crypto Space
            </h1>
            <p className="text-lg mb-8">
              Get answers to your most pressing questions from verified experts.
              Pay a small fee and get reliable insights.
            </p>
            <Link href="/register" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100">
               
                Get Started 
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Verified Experts"
                description="All experts are verified professionals with deep knowledge in the crypto space."
              />
              <FeatureCard
                title="Secure Payments"
                description="Your payments are secure and facilitated through smart contracts on the blockchain."
              />
              <FeatureCard
                title="Instant Access"
                description="Connect with experts instantly and get answers in real-time."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard
                step="1"
                title="Register and Set Up Profile"
                description="Register as a user or expert and set up your profile."
              />
              <StepCard
                step="2"
                title="Ask Questions"
                description="Users can ask questions and choose an expert based on their profile."
              />
              <StepCard
                step="3"
                title="Get Answers and Consultation"
                description="Experts provide answers, and you can continue with a consultation."
              />
            </div>
          </div>
        </section>

        {/* Expert Highlights Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ExpertCard
                name="John Doe"
                title="Blockchain Developer"
                expertise="Smart Contracts, DeFi"
                imgSrc="/path/to/image1.jpg"
              />
              <ExpertCard
                name="Jane Smith"
                title="Crypto Analyst"
                expertise="Trading, Market Analysis"
                imgSrc="/path/to/image2.jpg"
              />
              <ExpertCard
                name="Alice Johnson"
                title="NFT Expert"
                expertise="NFTs, Art & Collectibles"
                imgSrc="/path/to/image3.jpg"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">Join the platform to connect with experts and get answers to your questions.</p>
            <Link href="/register" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100">
              Join Now
            </Link>
          </div>
        </section>
      </main>
    </>
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
