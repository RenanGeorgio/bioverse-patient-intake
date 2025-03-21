"use client"

import { useEffect, useRef } from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { Tabs, TabsContent, TabElement, TabsTrigger } from '@/components/Tabs';
import { PersonalForm } from '@/components/Forms';
import Container from '@/components/Container';


export default function Intake() {
  const supabase = createClient();

  const userRef = useRef<User | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (user) {
        userRef.current = user as User;
      }
    }

    if (supabase) {
      fetchUser();
    }
  }, [supabase]);

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Patiente Intake</h1>
          <p className="text-muted-foreground">Help us, help you</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabElement className="grid w-full grid-cols-1">
            <TabsTrigger value="general">Inquiry</TabsTrigger>
          </TabElement>
          <TabsContent value="general" className="mt-6 flex justify-center">
            <PersonalForm userId={userRef.current?.id} />
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}