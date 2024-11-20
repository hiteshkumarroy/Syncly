
import { z } from "zod";

export const projectSchema=z.object({
  name:z.string()
  .min(1,"project name is required")
  .max(100,"project name must be 100 characters or less"),
  key:
  z.string()
  .min(2,"project key must be at least 2 characters")
  .max(100,"project key must be 10 characters or less"),
  description:z.string()
  .max(100,"description must be 500 characters or less")
  .optional(),


})