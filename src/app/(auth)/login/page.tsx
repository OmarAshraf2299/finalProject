"use client"

import MYinput from '@/app/_components/MYinput'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import {signIn} from "next-auth/react"
import * as z from "zod"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { loginDataType, loginSchema } from './login.schema'
import { loginUpAction } from './login.acton'






export default function Page() {

  const router = useRouter()


  const form = useForm({
    defaultValues : {
     
      email : "",
      password : ""
     
    },
    resolver : zodResolver(loginSchema)
  })

  async function handelLogin(values : loginDataType){
    console.log(values ,"values");


    signIn("credentials" , {  ...values ,   redirect : true , callbackUrl : "/"})







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


  }

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




<Button className='w-full my-2 cursor-pointer text-xl'>Login Now</Button>





  </form>




  </div>
  
  
  
  
  
  
  
  </>
}
