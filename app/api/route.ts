import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';


export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  const user = await req.json();

  if (!user) {
    return NextResponse.json({ error: "Missing parameter" }, { status: 404 });
  }

  const supabase = await createClient();
  
  const { data } = await supabase.auth.signInAnonymously();

  cookieStore.set({
    name: 'user',
    value: JSON.stringify(user)
  });

  return NextResponse.json(
    { message: "User created successfully", data },
    { status: 200 }
  );
}