export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  // Simple validation
  if (!email || !password || password.length < 4) {
    return Response.json(
      { error: "Invalid credentials" },
      { status: 400 }
    );
  }

  // In a real app, you'd check against a database
  return Response.json({
    success: true,
    user: { email, name: email.split("@")[0] },
  });
}