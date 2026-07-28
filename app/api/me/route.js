import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET() {
  const token = (await cookies()).get("token");

  if (!token) {
    return Response.json({ authenticated: false });
  }

  try {
    const payload = await verifyToken(token.value);
    return Response.json({ authenticated: true, user: payload });
  } catch {
    return Response.json({ authenticated: false });
  }
}