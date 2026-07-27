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
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px",
            background: "#222",
            color: "white",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            width="50"
            height="50"
          />

          <nav>
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
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}