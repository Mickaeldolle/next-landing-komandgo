import {  z } from "zod";
const regexPhone = /^((\+33|0)[1-9])(\d{2}[-. ]?\d{2}[-. ]?\d{2}[-. ]?\d{2})$/;

export const prospectSchema = z.object({
  lastname: z.string().nullable(),
  firstname: z.string().nullable(),
  phone: z.string().regex(regexPhone, {
    message: "",
  }).nullable(),
  email: z.string().email().nullable(),
  company: z.string().nullable(),
  user:z.boolean().nullable(),
  // address: z.object({
  //   label: z.string(),
  //   street: z.string(),
  //   city: z.string(),
  //   zip: z.string(),
  //   country: z.string(),
  //   lat: z.number().nullable(),
  //   long: z.number().nullable(),
  // })
});
