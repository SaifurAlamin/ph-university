import { z } from "zod";

const createAcademicFacultyValidation = z.object({
  body: z.object({
    // Define the Zod schema
    name: z.string({
      invalid_type_error:'Faculty must be a string'
    })
  }),
});
const updateAcademicFacultyValidation = z.object({
  body: z.object({
    // Define the Zod schema
    name: z.string({
      invalid_type_error:'Faculty must be a string'
    })
  }).optional(),
});

export const academicFacultyValidation = {
 createAcademicFacultyValidation,
 updateAcademicFacultyValidation
};
