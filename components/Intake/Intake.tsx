"use client"

import { Tabs, TabsContent, TabElement, TabsTrigger } from '@/components/Tabs';
import { PersonalForm, SupportForm, FeedbackForm } from '@/components/Forms';
import Container from '@/components/Container';


export default function Intake() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground">We're here to help. Choose the type of inquiry below.</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabElement className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General Inquiry</TabsTrigger>
            <TabsTrigger value="support">Support Request</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabElement>
          <TabsContent value="general" className="mt-6 flex justify-center">
            <PersonalForm />
          </TabsContent>
          <TabsContent value="support" className="mt-6 flex justify-center">
            <SupportForm />
          </TabsContent>
          <TabsContent value="feedback" className="mt-6 flex justify-center">
            <FeedbackForm />
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}