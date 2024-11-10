'use client'
import { useState } from 'react';

export default function PostQuestionForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    tags: '',
    bounty: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">Question Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter a concise question title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">Full Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Provide a detailed explanation of your question"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500 h-40"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="tags" className="block text-lg font-semibold text-gray-700 mb-2">Tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Add relevant tags, separated by commas"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
        <p className="text-sm text-gray-500 mt-1">Example: blockchain, smart contracts, Solidity</p>
      </div>

      <div className="mb-6">
        <label htmlFor="bounty" className="block text-lg font-semibold text-gray-700 mb-2">Bounty Price (EDU)</label>
        <input
          type="number"
          id="bounty"
          name="bounty"
          value={form.bounty}
          onChange={handleChange}
          placeholder="Enter bounty amount in EDU"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          min="0"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105"
        >
          Post Question
        </button>
      </div>
    </form>
  );
}
