import { z } from "zod";


// Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's name is required" }),
  motherName: z.string().min(1, { message: "Mother's name is required" }),
  motherNumber: z.string().min(1, { message: "Mother's number is required" }),
  fatherNumber: z.string().min(1, { message: "Father's number is required" }),
});


// Student interface validation schema
const createStudentValidation = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  user: z.string().min(1, { message: "User ID is required" }),
  name: z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
  }).refine(data => data.firstName && data.lastName, {
    message: "Name is required",
    path: ["name"],
  }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
  gender: z.enum(["female", "male", "other"], { required_error: "Gender is required" }),
  contactNumber: z.string().optional(),
  profileImg: z.string().optional(),
  bloodGroup: z.enum(["A+", "B+", "O+"], { required_error: "Blood group is required" }),
  gurdian: guardianSchema,

});
export const studentValidations = {
  createStudentValidation,
};
