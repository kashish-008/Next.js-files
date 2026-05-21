export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password || password.length < 4) {
    return Response.json(
      { error: "Invalid input" },
      { status: 400 }
    );
  }

  // In a real app, you'd save to database
  return Response.json({
    success: true,
    user: { name, email },
  });
}