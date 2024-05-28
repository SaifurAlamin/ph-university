import { z } from 'zod';

const userValidationSchema = z.object({
//   id: z.string().min(1, "ID cannot be empty"),
  password: z.string({
    invalid_type_error:'Pass must be string'
  }).max(20,'pass will between 20 charecter'),
//   needPassChange: z.boolean().default(true)
//   role: z.enum(['admin', 'user', 'faculty']),
//   status: z.enum(['in-progress', 'blocked']),
//   isDeleted: z.boolean().default(false),

});

export default userValidationSchema;
