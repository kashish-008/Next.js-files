import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {article.excerpt}
        </p>
        <Link 
          href={`/articles/${article.id}`}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}