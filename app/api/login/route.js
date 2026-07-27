import { createToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@gmail.com" && password === "123456") {

    const token = await createToken({ email });

    (await cookies()).set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return Response.json({ success: true });
  }

  return Response.json(
    { success: false },
    { status: 401 }
  );
}