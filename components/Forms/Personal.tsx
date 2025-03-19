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

interface Props extends ComponentProps<typeof Card> {
  userId: string | undefined;
}

const Personal = ({ userId, className }: Props) => {
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
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.maritalStatus}>
            <Label className="group-data-[invalid=true]/field:text-destructive">
              Current Marital Status <span aria-hidden="true">*</span>
            </Label>
            <RadioGroup
              name="maritalStatus"
              defaultValue={state.defaultValues.maritalStatus}
              className="flex space-x-1"
              disabled={pending}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="SINGLE"
                  id="r1"
                  aria-invalid={!!state.errors?.maritalStatus}
                  aria-errormessage="error-marital-status"
                />
                <Label htmlFor="r1">SINGLE</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="MARRIED"
                  id="r2"
                  aria-invalid={!!state.errors?.maritalStatus}
                  aria-errormessage="error-marital-status"
                />
                <Label htmlFor="r2">MARRIED</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="DIVORCED"
                  id="r3"
                  aria-invalid={!!state.errors?.maritalStatus}
                  aria-errormessage="error-marital-status"
                />
                <Label htmlFor="r3">DIVORCED</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="WIDOW"
                  id="r4"
                  aria-invalid={!!state.errors?.maritalStatus}
                  aria-errormessage="error-marital-status"
                />
                <Label htmlFor="r4">WIDOW</Label>
              </div>
            </RadioGroup>
            {state.errors?.maritalStatus && (
              <p id="error-marital-status" className="text-destructive text-sm">
                {state.errors.maritalStatus}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.address}>
            <Label htmlFor="address" className="group-data-[invalid=true]/field:text-destructive">
              Address <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="address"
              name="address"
              placeholder=""
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.address}
              aria-errormessage="error-address"
              defaultValue={state.defaultValues.address}
            />
            {state.errors?.address && (
              <p id="error-address" className="text-destructive text-sm">
                {state.errors.address}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.occupation}>
            <Label htmlFor="occupation" className="group-data-[invalid=true]/field:text-destructive">
              My current occupation <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="occupation"
              name="occupation"
              placeholder="I Work in..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.occupation}
              aria-errormessage="error-occupation"
              defaultValue={state.defaultValues.occupation}
            />
            {state.errors?.occupation && (
              <p id="error-occupation" className="text-destructive text-sm">
                {state.errors.occupation}
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
              rows={4}
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
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.symptomsStart}>
            <Label htmlFor="symptomsStart" className="group-data-[invalid=true]/field:text-destructive">
              When the symptoms have started
            </Label>
            <Textarea
              id="symptomsStart"
              name="symptomsStart"
              placeholder=""
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.symptomsStart}
              aria-errormessage="error-symptoms-start"
              defaultValue={state.defaultValues.symptomsStart}
            />
            {state.errors?.symptomsStart && (
              <p id="error-symptoms-start" className="text-destructive text-sm">
                {state.errors.symptomsStart}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.hasTreated}>
            <Label htmlFor="hasTreated" className="group-data-[invalid=true]/field:text-destructive">
              Did you have treated this condition before? <span aria-hidden="true">*</span>
            </Label>
            <Select name="hasTreated" defaultValue={state.defaultValues.hasTreated} disabled={pending}>
              <SelectTrigger
                id="hasTreated"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.hasTreated}
                aria-errormessage="error-has-treated"
              >
                <SelectValue placeholder="Select the correct option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">YES</SelectItem>
                <SelectItem value="no">NO</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.hasTreated && (
              <p id="error-has-treated" className="text-destructive text-sm">
                {state.errors.hasTreated}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.aboutTreated}>
            <Label htmlFor="aboutTreated" className="group-data-[invalid=true]/field:text-destructive">
              If you have treated before, tell us more about
            </Label>
            <Textarea
              id="aboutTreated"
              name="aboutTreated"
              placeholder=""
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              rows={4}
              aria-invalid={!!state.errors?.aboutTreated}
              aria-errormessage="error-about-treated"
              defaultValue={state.defaultValues.aboutTreated}
            />
            {state.errors?.aboutTreated && (
              <p id="error-about-treated" className="text-destructive text-sm">
                {state.errors.aboutTreated}
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