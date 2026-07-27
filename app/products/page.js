export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Product {id}</h1>

      <img
        src="/product.png"
        alt="Product"
        width={250}
      />

      <p>Product {id} details page</p>
    </div>
  );
}