import { z } from "zod";



export const EMailSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      }).email({
        message: "Enter valid email",
      }).min(5),
  });