import Link from "next/link";

export const metadata = {
  title: "Products Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            padding: "20px",
            background: "#222",
          }}
        >
          <Link
            href="/"
            style={{ color: "white", marginRight: "20px" }}
          >
            Home
          </Link>

          <Link
            href="/products"
            style={{ color: "white" }}
          >
            Products
          </Link>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <footer
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          © 2026 Products Store
        </footer>
      </body>
    </html>
  );
}