export const metadata = {
  title: "Products Store - Home",
  description: "Welcome to the Products Store. Browse our amazing collection of products."
};

export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Products Store
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop the latest trends and find everything you need in one place.
          </p>
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View Products
          </a>
        </div>
      </section>
    </main>
  );
}
