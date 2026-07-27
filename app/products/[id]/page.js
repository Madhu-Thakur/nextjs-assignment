export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        display: "inline-block",
      }}
    >
      <h2>Product {id} details page — content coming soon!</h2>
    </div>
  );
}