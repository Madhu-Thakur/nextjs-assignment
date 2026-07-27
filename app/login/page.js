"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {

    await fetch("/api/login",{
      method:"POST",
      body:JSON.stringify({email,password})
    });

    window.location="/dashboard";
  }

  return (
    <>
      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </>
  );
}