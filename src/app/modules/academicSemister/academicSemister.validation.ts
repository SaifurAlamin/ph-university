import { z } from 'zod';
import { Months } from './academicSemister.model';

const createAcademicSemisterValidation = z.object({
  body: z.object({
    // Define the Zod schema
    name: z.enum(['Autumn', 'Summer', 'Fall']),
    year: z.string(),
    code: z.enum(['01', '02', '03']),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),

  })

});
const updateAcademicSemisterValidation = z.object({
  body: z.object({
    // Define the Zod schema
    name: z.enum(['Autumn', 'Summer', 'Fall']).optional(),
    year: z.string().optional(),
    code: z.enum(['01', '02', '03']).optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),

  })

});

export const academicSemisterValidation = {
  createAcademicSemisterValidation,
  updateAcademicSemisterValidation
}
