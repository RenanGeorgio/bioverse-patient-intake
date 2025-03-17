"use client"

import * as React from "react"
import { useFormState } from 'react-dom';
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/Card"
import Input from "@/components/Input"
import Label from "@/components/Label"
import Button from "@/components/Button"
import Textarea from "@/components/Textarea"
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup"
import { cn } from "@/utils/cn"

import { feedbackFormAction } from "@/lib/form/actions"
import { Check } from "lucide-react"

export function FeedbackForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction, pending] = useFormState(feedbackFormAction, {
    defaultValues: {
      name: "",
      email: "",
      rating: "",
      feedback: "",
    },
    success: false,
    errors: null,
  })

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle>Share Your Feedback</CardTitle>
        <CardDescription>Your feedback helps us improve our products and services.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <Check className="size-4" />
              Thank you for your feedback! We appreciate your input.
            </p>
          ) : null}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.name}>
            <Label htmlFor="feedback-name" className="group-data-[invalid=true]/field:text-destructive">
              Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="feedback-name"
              name="name"
              placeholder="Your name"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              aria-errormessage="error-feedback-name"
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <p id="error-feedback-name" className="text-destructive text-sm">
                {state.errors.name}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.email}>
            <Label htmlFor="feedback-email" className="group-data-[invalid=true]/field:text-destructive">
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="feedback-email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-feedback-email"
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id="error-feedback-email" className="text-destructive text-sm">
                {state.errors.email}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.rating}>
            <Label className="group-data-[invalid=true]/field:text-destructive">
              How would you rate your experience? <span aria-hidden="true">*</span>
            </Label>
            <RadioGroup
              name="rating"
              defaultValue={state.defaultValues.rating}
              className="flex space-x-1"
              disabled={pending}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="1"
                  id="r1"
                  aria-invalid={!!state.errors?.rating}
                  aria-errormessage="error-rating"
                />
                <Label htmlFor="r1">1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="2"
                  id="r2"
                  aria-invalid={!!state.errors?.rating}
                  aria-errormessage="error-rating"
                />
                <Label htmlFor="r2">2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="3"
                  id="r3"
                  aria-invalid={!!state.errors?.rating}
                  aria-errormessage="error-rating"
                />
                <Label htmlFor="r3">3</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="4"
                  id="r4"
                  aria-invalid={!!state.errors?.rating}
                  aria-errormessage="error-rating"
                />
                <Label htmlFor="r4">4</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="5"
                  id="r5"
                  aria-invalid={!!state.errors?.rating}
                  aria-errormessage="error-rating"
                />
                <Label htmlFor="r5">5</Label>
              </div>
            </RadioGroup>
            {state.errors?.rating && (
              <p id="error-rating" className="text-destructive text-sm">
                {state.errors.rating}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.feedback}>
            <Label htmlFor="feedback-text" className="group-data-[invalid=true]/field:text-destructive">
              Your Feedback <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="feedback-text"
              name="feedback"
              placeholder="Please share your thoughts, suggestions, or concerns..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              rows={4}
              aria-invalid={!!state.errors?.feedback}
              aria-errormessage="error-feedback-text"
              defaultValue={state.defaultValues.feedback}
            />
            {state.errors?.feedback && (
              <p id="error-feedback-text" className="text-destructive text-sm">
                {state.errors.feedback}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="sm" disabled={pending}>
            {pending ? "Submitting..." : "Submit Feedback"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

