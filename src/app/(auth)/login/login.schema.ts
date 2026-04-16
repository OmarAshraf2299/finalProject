import * as z from "zod"


export const loginSchema = z.object(
  {
    email : z.string().email("Invalid email address").nonempty("Email is required"),
    password : z.string().min(8,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/).nonempty("Password is required"),
})


export type loginDataType = z.infer<typeof loginSchema>