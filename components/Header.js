"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => {
        setIsAuthenticated(data.authenticated);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <Link href="/">Home</Link>{" "}
        <Link href="/products">Products</Link>
      </div>

      {loading ? (
        <span>Loading...</span>
      ) : isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
}