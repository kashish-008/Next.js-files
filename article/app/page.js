import { articles } from './data/articles';
import ArticleCard from './components/ArticleCard';

export default function Home() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to ArticleHub
        </h1>
        <p className="text-xl text-gray-600">
          Discover insightful articles on web development and technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}