import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';


export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  const answer = await req.json();

  if (!answer) {
    return NextResponse.json({ error: "Missing parameter" }, { status: 404 });
  }

  cookieStore.set({
    name: 'answer',
    value: JSON.stringify(answer)
  });

  return NextResponse.json(
    { message: "User created successfully", answer },
    { status: 200 }
  )
}