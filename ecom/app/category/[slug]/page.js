import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryProductsPage({ params }) {
  const { slug } = await params;
  const categoryData = categories.find(cat => cat.slug === slug);
  
  if (!categoryData) {
    notFound();
  }

  const categoryProducts = products.filter(
    product => product.category === slug
  );

  return (
    <div>
      <Link href="/categories" className="text-blue-600 hover:underline mb-4 inline-block">
         Back to Categories
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-center">
        {categoryData.name}
      </h1>
      <p className="text-gray-600 text-center mb-8">
        {categoryData.description}
      </p>
      
      {categoryProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}