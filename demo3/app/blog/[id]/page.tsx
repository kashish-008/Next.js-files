// app/blog/[id]/page.tsx
import Link from "next/link";
import { getBlogById, getAllBlogs } from "@/app/data/blogs";
import { notFound } from "next/navigation";

// Next.js ko batata hai kaun-kaun se pages pehle se generate karne hain
export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = getBlogById(parseInt(id));

  // Agar blog nahi mila toh 404 page dikhao
  if (!blog) {
    notFound();
  }

  return (
    <div className="py-8 px-4">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-blue-600 transition mb-6"
      >
        ← Back to Home
      </Link>

      {/* Blog Content */}
      <article className="bg-white rounded-xl shadow-md p-8">
        {/* Header */}
        <div className="mb-6">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex gap-6 text-gray-500 text-sm">
            <span>👤 {blog.author}</span>
            <span>📅 {blog.date}</span>
            <span>⏱️ {blog.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </article>

      {/* Navigation Bottom */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          ← Back to All Articles
        </Link>
      </div>
    </div>
  );
}