import { redirect } from 'next/navigation';
import Head from 'next/head';
import { createClient } from '@/lib/supabase/server';
import QuestionList from '@/components/Questions';
import { getURL } from '@/utils/helpers';

import '@/styles/app.css';
  

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/signin');
  }

  return (
    <>
      <Head>
        <title>Bioverse App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={getURL("/favicon.ico")} />
      </Head>
      <div className="w-full h-full bg-200">
        {user && (
          <div
            className="w-full h-full flex flex-col justify-center items-center p-4"
            style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
          >
            <QuestionList />
          </div>
        )}
      </div>
    </>
  );
}