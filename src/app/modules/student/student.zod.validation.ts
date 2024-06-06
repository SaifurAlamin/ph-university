import { z } from "zod";

// GUrdian interface validation schema
const gurdianSchema = z.object({
  fatherName: z.string().min(1, "Father's name cannot be empty"),
  motherName: z.string().min(1, "Mother's name cannot be empty"),
  motherNumber: z.string().min(1, "Mother's contact number cannot be empty"),
  fatherNumber: z.string().min(1, "Father's contact number cannot be empty"),
});

// Student interface validation schema
const createStudentValidation = z.object({
  body: z.object({
    password: z.string().max(20, "pass is required"),
    student: z.object({
      name: z.object({
        firstName: z.string().min(1, "First name cannot be empty"),
        lastName: z.string().min(1, "Last name cannot be empty"),
      }),
      dateOfBirth: z.string().min(1, "Date of birth cannot be empty"),
      email: z.string().email("Invalid email format"),
      gender: z.enum(["female", "male", "other"]),
      contactNumber: z.string().optional(),
      profileImg: z.string().optional(),
      bloodGroup: z.enum(["A+", "B+", "O+"]),
      gurdian: gurdianSchema,
      admissionSemister: z.string(),
    }),
  }),
});
export const studentValidations = {
  createStudentValidation,
};