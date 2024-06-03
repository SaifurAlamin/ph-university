import { z } from 'zod';
import { Months } from './academicSemister.model';

const createAcademicSemisterValidationSchema = z.object({
  body: z.object({
// Define the Zod schema

  name: z.enum(['Autumn', 'Summer', 'Fall']),
  year: z.date(),
  code: z.enum(['01', '02', '03']),
  startMonth: z.enum([...Months]as [string, ...string[]]),
  endMonth: z.enum([...Months]as [string, ...string[]]),

  })

});

export const academicSemisterValidation = {
  createAcademicSemisterValidationSchema
}
