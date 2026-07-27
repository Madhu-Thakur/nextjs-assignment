import Link from "next/link";

export default function Products() {
  return (
    <main>
      <h1>Products Page</h1>

      <ul>
        {[...Array(10)].map((_, index) => (
          <li key={index}>
            <Link href={`/products/${index + 1}`}>
              Product {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}