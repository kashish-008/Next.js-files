// app/page.tsx
import Link from "next/link";
import { getAllBlogs } from "./data/blogs";

export default function HomePage() {
  const blogs = getAllBlogs();

  return (
    <div className="py-8 px-4">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to MyBlog 📝
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore articles about Next.js, React, Tailwind CSS, and more.
          Learn by reading practical guides and tutorials.
        </p>
      </section>

      {/* Blog List */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="group"
            >
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 hover:border-blue-200">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}