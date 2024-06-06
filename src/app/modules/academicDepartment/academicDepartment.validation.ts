import { z } from "zod";

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    // Define the Zod schema
    name: z.string({
      invalid_type_error: "Faculty must be a string",
    }),
    academicFaculty: z.string({
      required_error: "Faculty is required",
    }),
  }),
});
const updateAcademicDepartmentValidation = z.object({
  body: z
    .object({
      // Define the Zod schema
      name: z.string({
        invalid_type_error: "Faculty must be a string",
      }),
    })
    .optional(),
  academicFaculty: z
    .string({
      required_error: "Faculty is required",
    })
    .optional(),
});

export const academicDepartmentValidation = {
  createAcademicDepartmentValidation,
  updateAcademicDepartmentValidation,
};
