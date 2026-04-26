"use client"

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { loginDataType, loginSchema } from './login.schema'
import { toast } from 'sonner'






export default function Page() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    defaultValues : {
     
      email : "",
      password : ""
     
    },
    resolver : zodResolver(loginSchema)
  })

  async function handelLogin(values : loginDataType){
    console.log(values ,"values");
    
    try {
      setIsLoading(true)
      const result = await signIn("credentials" , {  ...values ,   redirect : false })
      
      console.log("SignIn result:", result)
      
      if (result?.error) {
        const errorMsg = result.error === "CredentialsSignin" 
          ? "Invalid email or password" 
          : result.error
        toast.error(errorMsg, { position: "top-center", richColors: true })
        console.error("Login error:", result.error)
      } else if (result?.ok) {
        toast.success("Login successful!", { position: "top-center", richColors: true })
        window.location.href = "/"
      } else {
        toast.error("Login failed", { position: "top-center", richColors: true })
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "An error occurred during login"
      toast.error(errorMsg, { position: "top-center", richColors: true })
      console.error("Login exception:", error)
    } finally {
      setIsLoading(false)
    }
  }







    // const loginOk = await loginUpAction(values)

    // if(loginOk){
    //   toast.success("Login Success" ,{
    //     position : "top-center",
    //     richColors : true
    //   })

    //   router.push("/")



    // }else{
    //   toast.error("Login Failed" ,{
    //     position : "top-center",
    //     richColors : true
    //   })
    // }

  return <>
  
  <div className='bg-amber-50 p-3 w-10/12 mx-auto'>

  <h1 className='text-2xl my-3'>Login Page</h1>

  <form action="" onSubmit={ form.handleSubmit (handelLogin)} className='w-1/2 mx-auto'>




<Controller
  name="email"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Email</FieldLabel>
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder="Enter your email"
            autoComplete="off"
          />
        
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
  )}
/>
<Controller
name="password"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Password</FieldLabel>
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder="Enter your password"
            autoComplete="off"
            type='password'
          />
        
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
  )}
/>




<Button className='w-full my-2 cursor-pointer text-xl' disabled={isLoading}>
  {isLoading ? "Logging in..." : "Login Now"}
</Button>





  </form>




  </div>
  
  
  
  
  
  
  
  </>
}
