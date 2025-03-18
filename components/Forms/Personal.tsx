"use client"

import { ComponentProps } from 'react';
import { useFormState } from 'react-dom';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';
import { personalFormAction } from '@/lib/form/actions';
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/Card';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import { RadioGroup, RadioGroupItem } from '@/components/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/Select';


const Personal = ({ className }: ComponentProps<typeof Card>) => {
  const [state, formAction, pending] = useFormState(personalFormAction, {
    defaultValues: {
      name: "",
      birth: "",
      gender: "",
      maritalStatus: "",
      address: "",
      occupation: "",
      reason: "",
      symptomsStart: "",
      hasTreated: "",
      aboutTreated: "",
    },
    success: false,
    errors: null,
  });

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle>Patiente Form</CardTitle>
        <CardDescription>Fill all the questions</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <Check className="size-4" />
              Your answer has been sent. Thank you.
            </p>
          ) : null}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.name}>
            <Label htmlFor="name" className="group-data-[invalid=true]/field:text-destructive">
              Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Lee Robinson"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              aria-errormessage="error-name"
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <p id="error-name" className="text-destructive text-sm">
                {state.errors.name}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.birth}>
            <Label htmlFor="birth" className="group-data-[invalid=true]/field:text-destructive">
              Birth day <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="birth"
              name="birth"
              placeholder="MM/DD/YYYY"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.birth}
              aria-errormessage="error-birth"
              defaultValue={state.defaultValues.birth}
            />
            {state.errors?.birth && (
              <p id="error-birth" className="text-destructive text-sm">
                {state.errors.birth}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.gender}>
            <Label htmlFor="gender" className="group-data-[invalid=true]/field:text-destructive">
              Gender <span aria-hidden="true">*</span>
            </Label>
            <Select name="gender" defaultValue={state.defaultValues.gender} disabled={pending}>
              <SelectTrigger
                id="gender"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.gender}
                aria-errormessage="error-gender"
              >
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masc">MASC.</SelectItem>
                <SelectItem value="fem">FEM.</SelectItem>
                <SelectItem value="na">NA</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.gender && (
              <p id="error-gender" className="text-destructive text-sm">
                {state.errors.gender}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.email}>
            <Label htmlFor="email" className="group-data-[invalid=true]/field:text-destructive">
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="leerob@acme.com"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-email"
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id="error-email" className="text-destructive text-sm">
                {state.errors.email}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.reason}>
            <Label htmlFor="reason" className="group-data-[invalid=true]/field:text-destructive">
              Reason for the visit <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="reason"
              name="reason"
              placeholder="Pain in..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.reason}
              aria-errormessage="error-reason"
              defaultValue={state.defaultValues.reason}
            />
            {state.errors?.reason && (
              <p id="error-reason" className="text-destructive text-sm">
                {state.errors.reason}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="sm" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Personal;