import * as z from "zod"

export const signupSchema = z.object(
  {
    name : z.string().min(3,"Name must be at least 3 characters").nonempty("Name is required"),
    email : z.string().email("Invalid email address").nonempty("Email is required"),
    password : z.string().min(8,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/).nonempty("Password is required"),
    rePassword : z.string().min(8,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/).nonempty("Re-enter Password is required"),
    phone : z.string().min(10,"Phone number must be at least 10 digits").nonempty("Phone number is required")
  }
)
.refine( function (params){
  return params.password === params.rePassword ? true : false
},{
error :"Passwords and re-entered password do not match",
path : ["rePassword"]

})

export type signupDataType = z.infer<typeof signupSchema>
