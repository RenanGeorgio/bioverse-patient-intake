"use client"

import * as React from "react"
import { useFormState } from 'react-dom';
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "@/components/Card"
import Input from "@/components/Input"
import Label from "@/components/Label"
import Button from "@/components/Button"
import Textarea from "@/components/Textarea"
import { cn } from "@/utils/cn"

import { feedbackFormAction } from "@/lib/form/actions"
import { Check } from "lucide-react"

export function WindowComponent({ className }: React.ComponentProps<typeof Card>) {
    return (
        <Card className={cn("w-full max-w-md", className)}>
            <CardHeader>
                <CardTitle>Share Your Feedback</CardTitle>
                <CardDescription>Your feedback helps us improve our products and services.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <div className="group/field grid gap-2">
                    <Label htmlFor="feedback-text" className="group-data-[invalid=true]/field:text-destructive">
                        Your Fee
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
                </div>
            </CardContent>
        </Card>
    );
}