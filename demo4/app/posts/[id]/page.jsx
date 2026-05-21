async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

async function getComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

export default async function PostDetailPage({ params }) {
  // params is automatically provided by Next.js for dynamic routes
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getComments(id);

  return (
    <div className="max-w-3xl mx-auto">
      <a
        href="/posts"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to all posts
      </a>
      <article className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>
        <div className="text-sm text-gray-500">Post ID: {post.id}</div>
      </article>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Comments ({comments.length})
        </h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-800">{comment.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{comment.email}</p>
              <p className="text-gray-700">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}