async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // This makes it dynamic (SSR)
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

import Link from "next/link";

export default async function PostsPage() {
  const posts = await getPosts();
  // Show only first 10 posts
  const displayPosts = posts.slice(0, 10);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <p className="text-gray-600 mb-6">
        This page demonstrates dynamic data fetching from an external API (
        JSONPlaceholder). Click on any post to see the full details on a dynamic
        route page.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {post.title}
            </h2>
            <p className="text-gray-600 line-clamp-3">{post.body}</p>
            <span className="inline-block mt-4 text-blue-500 hover:underline">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}