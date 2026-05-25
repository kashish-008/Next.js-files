export default function ContactPage() {
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Contact Me 
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl">
        <p className="text-gray-600 mb-6">
          Have a question or want to collaborate? Fill the form below!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mb-4 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mb-4 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="mb-4 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-500 px-4 py-2 font-medium text-white transition hover:bg-amber-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}