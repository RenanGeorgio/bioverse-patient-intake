"use client";

import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Database } from '@/lib/schema';
import { updateQuestion } from '@/lib/supabase/queries';
import { getURL } from '@/utils/helpers';


type Question = Database['public']['Tables']['questionnaire']['Row']

const Questionnaire = ({ question, onDelete }: { question: Question; onDelete: () => void }) => {
  const supabase = createClient();

  /*const toggle = () => {
    const id: string | number = question.id;

    const getUpdate = async (id: string | number) => {
      try {
        const { data } = await updateQuestion(supabase, isCompleted, id);
  
        if (data) {
          setIsCompleted(data.recomendation);
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    
    if (id) {
      getUpdate(id);
    }
  }*/

  return (
    <li key={question?.id} className="w-full block cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"> 
        <Link 
          href={{
            pathname: getURL(`/questionnaire/${question?.id}`),
            query: { author: question?.user_id },
          }} 
          className="flex items-center px-4 py-4 sm:px-6 w-full" 
          passHref 
          legacyBehavior
          >
            <div className="min-w-0 flex-1 flex items-center">
                <div className="text-sm leading-5 font-medium truncate">{question.recomendation}</div>
            </div>
        </Link>
        <button
          onClick={(e) => {
            e?.preventDefault();
            e?.stopPropagation();
            onDelete();
          }}
          className="w-4 h-4 ml-2 border-2 hover:border-black rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
    </li>
  );
}

export default Questionnaire;