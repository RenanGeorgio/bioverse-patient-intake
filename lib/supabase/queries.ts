import { cache } from 'react';
import { SupabaseClient, PostgrestError, User } from '@supabase/supabase-js';
import { Database, Json } from '@/lib/schema';

type Question = Database['public']['Tables']['questionnaire']['Row'];

type Props = {
  questions: Question[] | null;
  error?: PostgrestError | null;
}

type QuestionsProps = (supabase: SupabaseClient) => Promise<Props>;

type UserProps = (supabase: SupabaseClient) => Promise<User | undefined | null>;


export const getUser: UserProps = cache(async (supabase: SupabaseClient) => {
  const {
    data: { user }
  } = await supabase?.auth?.getUser();

  return user;
});

export const getQuestions: QuestionsProps = cache(async (supabase: SupabaseClient) => {
  const { data: questions, error } = await supabase
    .from('questionnaire')
    .select('*')
    .order('id', { ascending: true });

  console.log(questions);

  return { questions, error };
});

export const addQuestions = async (supabase: SupabaseClient, answers: Json, id: string | number) => {
    const { data: todo, error } = await supabase
        .from('questionnaire')
        .insert({ answers, user_id: id })
        .select()
        .single();
  
    return { todo, error };
};

export const updateQuestion = cache(async (supabase: SupabaseClient, isRecomendation: string | null, id: string | number) => {
    const { data } = await supabase
        .from('questionnaire')
        .update({ recomendation: isRecomendation })
        .eq('id', id)
        .throwOnError()
        .select()
        .single();
  
    return data;
});

export const checkUser = cache(async (supabase: SupabaseClient, name: string, email: string) => {
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('name', name)
    .eq('email', email)
    .single();

  return user;
});