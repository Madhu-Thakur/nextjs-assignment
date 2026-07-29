export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: `${product.title} - Products Store`,
    description: product.description
  };
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-xl">★</span>
      ))}
      {hasHalfStar && <span className="text-yellow-400 text-xl">★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-xl">★</span>
      ))}
      <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
    </div>
  );
}

import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/products"
        className="inline-block text-blue-600 hover:text-blue-700 mb-6 font-medium"
      >
        ← Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="mb-4">
              <StarRating rating={product.rating} />
            </div>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Category:</span>
                <span className="text-gray-900 capitalize">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Brand:</span>
                <span className="text-gray-900 capitalize">{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Stock:</span>
                <span className="text-gray-900">{product.stock} available</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-blue-600">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
