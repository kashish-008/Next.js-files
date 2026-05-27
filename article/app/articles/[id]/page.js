'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '../../data/articles';

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
         Back to Home
      </Link>
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{article.date}</span>
            <span className="mx-2">-</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {article.title}
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {article.content}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
