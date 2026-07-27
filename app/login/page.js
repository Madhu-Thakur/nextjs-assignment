"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Welcome {session.user.name}</h1>

        <button onClick={() => signOut()}>
          Logout
        </button>
      </>
    );
  }

  return (
    <button onClick={() => signIn("github")}>
      Login with GitHub
    </button>
  );
}