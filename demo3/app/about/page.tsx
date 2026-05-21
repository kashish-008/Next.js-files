// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About Me 👋
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8">
        <p className="text-lg text-gray-700 mb-4">
          Hey! I&apos;m <span className="font-bold text-blue-600">Kashish</span>, 
          a passionate developer learning Next.js and building awesome web applications.
        </p>

        <p className="text-gray-600 mb-6">
          This blog is my learning journey where I share everything I learn about
          Next.js, React, Tailwind CSS, and modern web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">🚀 Skills</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">📬 Connect</h2>
            <p className="text-gray-600">
              Email: kashish@example.com<br />
              GitHub: github.com/kashish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}