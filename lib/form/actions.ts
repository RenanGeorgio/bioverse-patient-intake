"use server"

import { z } from 'zod';
import { setAnswers } from '@/controllers/questions';
import { createClient } from '@/lib/supabase/server';
import { personalSchema, medHistorySchema } from '@/lib/form/schema';


export async function personalFormAction(_prevState: unknown, formData: FormData) {
  const supabase = await createClient();
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  try {
    const validatedData = personalSchema.parse(data);
    console.log(validatedData);
    const { todo, error } = await addQuestions(supabase, validatedData, userRef.current?.id);

    const result = await setAnswers(validatedData);

    if (!result) {
      return {
        ..._prevState,
        success: false,
        errors,
      }
    }

    console.log(result);

    return {
      ..._prevState,
      success: true,
      errors: null,
      defaultValues: validatedData,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.join(", ")]),
        ),
      }
    }

    return {
      defaultValues,
      success: false,
      errors: null,
    }
  }
}

export async function personalFormActionBackup(_prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  console.log(data)
  const defaultValues = z.record(z.string(), z.string()).parse(data);

  try {
    const data = personalSchema.parse(Object.fromEntries(formData))

    // This simulates a slow response like a form submission.
    // Replace this with your actual form submission logic.
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(data)

    return {
      defaultValues: {
        name: "",
        birth: "",
        reason: "",
        symptomsStart: "",
        hasTreated: "",
        aboutTreated: "",
        gender: "",
        maritalStatus: "",
        occupation: "",
        address: "",
      },
      success: true,
      errors: null,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.join(", ")]),
        ),
      }
    }

    return {
      defaultValues,
      success: false,
      errors: null,
    }
  }
}


export async function supportFormAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  try {
    const validatedData = medHistorySchema.parse(data)

    // Here you would typically send the data to your support system
    console.log("Support form submission:", validatedData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      ...prevState,
      success: true,
      errors: null,
      defaultValues: validatedData,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce(
        (acc, curr) => {
          const path = curr.path[0] as string
          acc[path] = curr.message
          return acc
        },
        {} as Record<string, string>,
      )

      return {
        ...prevState,
        success: false,
        errors,
      }
    }

    return {
      ...prevState,
      success: false,
      errors: { form: "Something went wrong. Please try again." },
    }
  }
}

export async function feedbackFormAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  try {
    const validatedData = medHistorySchema.parse(data)

    // Here you would typically send the feedback to your database or service
    console.log("Feedback form submission:", validatedData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      ...prevState,
      success: true,
      errors: null,
      defaultValues: validatedData,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce(
        (acc, curr) => {
          const path = curr.path[0] as string
          acc[path] = curr.message
          return acc
        },
        {} as Record<string, string>,
      )

      return {
        ...prevState,
        success: false,
        errors,
      }
    }

    return {
      ...prevState,
      success: false,
      errors: { form: "Something went wrong. Please try again." },
    }
  }
}

