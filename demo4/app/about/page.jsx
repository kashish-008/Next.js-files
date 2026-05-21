export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About This Project</h1>
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <p className="text-gray-700">
          This website was built to help beginners learn Next.js 14+ with
          Tailwind CSS. It demonstrates:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>App Router:</strong> File-based routing with folders
          </li>
          <li>
            <strong>Server Components:</strong> Pages like /posts fetch data on
            the server
          </li>
          <li>
            <strong>Client Components:</strong> Interactive components like
            login/register forms and navbar
          </li>
          <li>
            <strong>Dynamic Routes:</strong> /posts/[id] to show individual
            posts
          </li>
          <li>
            <strong>Authentication:</strong> Login/register using Context API
          </li>
          <li>
            <strong>Protected Routes:</strong> Dashboard is only accessible
            after login
          </li>
          <li>
            <strong>API Integration:</strong> Fetching data from
            JSONPlaceholder API
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Utility-first styling with responsive
            design
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          Try logging in (any email/password with min 4 chars), explore the
          posts, and see how the dynamic routing works!
        </p>
      </div>
    </div>
  );
}