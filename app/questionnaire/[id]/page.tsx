import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Head from 'next/head';
//import Questionnaires from '@/components/Questionnaires';
import { getURL } from '@/utils/helpers';

export default async function QuestionnairePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/signin');
  }

  const { id } = await params;

  return (
    <>
      <Head>
        <title>Bioverse App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={getURL("/favicon.ico")} />
      </Head>
      <div className="w-full h-full bg-200">
        <div
          className="w-full h-full flex flex-col justify-center items-center p-4"
          style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
        >
          {/*<Questionnaires />*/}
        </div>
      </div>
    </>
  );
}
