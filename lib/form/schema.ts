import { z } from 'zod';

const GENDER_TYPES = ["MASC", "FEM"] as const;
const MARITAL_STATUS_TYPES = ["SINGLE", "MARIED"] as const;
const SMOKE_TYPES = ["NO", "YES", "FORMER"] as const;
const DIET_TYPES = ["VEGETARIAN", "VEGAN", "GLUTEN_FREE", "KETO", "OTHER", "NO"] as const;
const EXERCISE_TYPE = ["DAILY", "WEEKLY", "MONTHLY"] as const;

export const personalSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(64, { message: "Name must be at most 64 characters" }),
  birth: z.coerce.date(),
  reason: z
    .string()
    .min(1, { message: "Motivation is required" })
    .max(1000, { message: "Motivation must be at most 1000 characters" })
    .or(z.string().array().nonempty()),
  symptomsStart: z.string().datetime().nullable(),
  hasTreated: z.boolean(),
  aboutTreated: z.string().optional(),
  gender: z.enum(GENDER_TYPES),
  maritalStatus: z.enum(MARITAL_STATUS_TYPES),
  occupation: z.string().optional(),
  address: z.string().min(1, "Address is required"),
});

export type PersonalSchemaType = z.infer<typeof personalSchema>;
     
export const medHistorySchema = z.object({
  chronicConditions: z.string().array(),
  hospitalizations: z.string().min(1, "Required field"),
  mentalHealth: z.boolean(),
  smoke: z.enum(SMOKE_TYPES),
  recreationalDrugs: z.boolean(),
  mobilityIssues: z.boolean(),
  diet: z.enum(DIET_TYPES),
  sleep: z.number().lte(24, { message: "Invalid" }),
  allergies: z.object({
    has: z.boolean(),
    allergiesList: z.string().array().optional(),
  }),
  medications: z.object({
    isUsing: z.boolean(),
    medicationsList: z.object({
      name: z.string().min(1, "Medication name is required"),
      dosage: z.string().min(1, "Medication dosage is required"),
    }).array().optional(),
  }),
  alcohol: z.object({
    drink: z.boolean(),
    howMoth: z.string().optional(),
  }),
  exercise: z.object({
    doExercide: z.boolean(),
    level: z.enum(EXERCISE_TYPE).optional(),
  }),
  stress: z.object({
    hasStress: z.boolean(),
    source: z.string().optional(),
  }),
});

export type MedHistorySchemaType = z.infer<typeof medHistorySchema>;