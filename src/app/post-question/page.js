import AskQuestionForm from '../components/AskQueForm';

export default function PostQuestionPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Post Your Question</h1>
        <AskQuestionForm />
      </div>
    </div>
  );
}
