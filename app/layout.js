export const metadata = {
  title: "Products Store",
  description: "Next.js Layout Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "#2563eb",
            color: "white",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h1>Products Store</h1>
        </header>

        <main
          style={{
            minHeight: "80vh",
            padding: "20px",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            background: "#111827",
            color: "white",
            padding: "15px",
            textAlign: "center",
          }}
        >
          © 2026 Products Store
        </footer>
      </body>
    </html>
  );
}