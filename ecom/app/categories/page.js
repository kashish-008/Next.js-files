import { categories } from '@/data/products';
import CategoryCard from '@/components/CategoryCard';

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Shop by Category</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}