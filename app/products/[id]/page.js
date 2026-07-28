export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: `${product.title} - Products Store`,
    description: product.description
  };
}

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
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width={250}
      />

      <p>{product.description}</p>

      <h3>Price: ${product.price}</h3>
    </div>
  );
}