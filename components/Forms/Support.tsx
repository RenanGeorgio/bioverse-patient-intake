"use client"

import * as React from "react"
import { useFormState } from 'react-dom';
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/Card"
import Input from "@/components/Input"
import Label from "@/components/Label"
import Button from "@/components/Button"
import Textarea from "@/components/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Select"
import { cn } from "@/utils/cn"

import { supportFormAction } from "@/lib/form/actions"
import { Check } from "lucide-react"

export function SupportForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction, pending] = useFormState(supportFormAction, {
    defaultValues: {
      name: "",
      email: "",
      orderNumber: "",
      issueType: "",
      description: "",
    },
    success: false,
    errors: null,
  })

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle>Technical Support</CardTitle>
        <CardDescription>Having issues with your product? Our support team is ready to help.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <Check className="size-4" />
              Your support request has been submitted. We'll get back to you shortly.
            </p>
          ) : null}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.name}>
            <Label htmlFor="support-name" className="group-data-[invalid=true]/field:text-destructive">
              Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="support-name"
              name="name"
              placeholder="Your name"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              aria-errormessage="error-support-name"
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <p id="error-support-name" className="text-destructive text-sm">
                {state.errors.name}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.email}>
            <Label htmlFor="support-email" className="group-data-[invalid=true]/field:text-destructive">
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="support-email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-support-email"
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id="error-support-email" className="text-destructive text-sm">
                {state.errors.email}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.orderNumber}>
            <Label htmlFor="order-number" className="group-data-[invalid=true]/field:text-destructive">
              Order Number
            </Label>
            <Input
              id="order-number"
              name="orderNumber"
              placeholder="e.g., ORD-12345"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.orderNumber}
              aria-errormessage="error-order-number"
              defaultValue={state.defaultValues.orderNumber}
            />
            {state.errors?.orderNumber && (
              <p id="error-order-number" className="text-destructive text-sm">
                {state.errors.orderNumber}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.issueType}>
            <Label htmlFor="issue-type" className="group-data-[invalid=true]/field:text-destructive">
              Issue Type <span aria-hidden="true">*</span>
            </Label>
            <Select name="issueType" defaultValue={state.defaultValues.issueType} disabled={pending}>
              <SelectTrigger
                id="issue-type"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.issueType}
                aria-errormessage="error-issue-type"
              >
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical Problem</SelectItem>
                <SelectItem value="billing">Billing Issue</SelectItem>
                <SelectItem value="account">Account Access</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.issueType && (
              <p id="error-issue-type" className="text-destructive text-sm">
                {state.errors.issueType}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.description}>
            <Label htmlFor="support-description" className="group-data-[invalid=true]/field:text-destructive">
              Description <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="support-description"
              name="description"
              placeholder="Please describe your issue in detail..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              rows={4}
              aria-invalid={!!state.errors?.description}
              aria-errormessage="error-support-description"
              defaultValue={state.defaultValues.description}
            />
            {state.errors?.description && (
              <p id="error-support-description" className="text-destructive text-sm">
                {state.errors.description}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="sm" disabled={pending}>
            {pending ? "Submitting..." : "Submit Support Request"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

