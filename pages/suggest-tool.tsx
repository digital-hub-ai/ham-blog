import Head from &quot;next/head&quot;;
import { useState } from &quot;react&quot;;

export default function SuggestTool() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: &quot;&quot;,
    category: &quot;&quot;,
    subcategory: &quot;&quot;,
    url: &quot;&quot;,
    description: &quot;&quot;,
    email: &quot;&quot;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Suggest a Tool | AI Tools Directory</title>
        <meta name="description&quot; content="Suggest a new AI tool for the directory.&quot; />
      </Head>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0&quot;>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse&quot;></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-2000&quot;></div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4 relative z-10&quot;>
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-xl animate-fade-in-up&quot;>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-center&quot;>Suggest a Tool</h1>
          {submitted ? (
            <div className="text-center text-xl text-green-400 font-semibold py-12&quot;>
              Thank you for your suggestion! 🚀<br />We appreciate your contribution to the AI Tools Directory.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5&quot;>
              <input
                type="text&quot;
                name="name&quot;
                placeholder="Tool Name*&quot;
                value={form.name}
                onChange={handleChange}
                required
                className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-500 transition-all duration-300&quot;
              />
              <input
                type="text&quot;
                name="category&quot;
                placeholder="Category*&quot;
                value={form.category}
                onChange={handleChange}
                required
                className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-500 transition-all duration-300&quot;
              />
              <input
                type="text&quot;
                name="subcategory&quot;
                placeholder="Subcategory&quot;
                value={form.subcategory}
                onChange={handleChange}
                className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-500 transition-all duration-300&quot;
              />
              <input
                type="url&quot;
                name="url&quot;
                placeholder="Tool Website URL*&quot;
                value={form.url}
                onChange={handleChange}
                required
                className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-500 transition-all duration-300&quot;
              />
              <textarea
                name="description&quot;
                placeholder="Short Description*&quot;
                value={form.description}
                onChange={handleChange}
                required
                rows={3}
                className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-500 transition-all duration-300&quot;
              />
              <input
                type="email&quot;
                name="email&quot;
                placeholder="Your Email (optional)&quot;
                value={form.email}
                onChange={handleChange}
                className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-500 transition-all duration-300&quot;
              />
              <button
                type="submit&quot;
                className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-xl hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 mt-2&quot;
              >
                Submit Suggestion
              </button>
            </form>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
} 