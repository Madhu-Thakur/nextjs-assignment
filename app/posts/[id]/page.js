export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Post ${id} - My Blog`,
    description: `Viewing blog post ${id}`
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Post ID: {id}</h1>
    </main>
  );
}