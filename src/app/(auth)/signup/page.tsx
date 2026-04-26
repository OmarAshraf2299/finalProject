"use client"

import MYinput from '@/app/_components/MYinput'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { signupDataType, signupSchema } from './signup.schema'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'






export default function Page() {

  const router = useRouter()


  const form = useForm({
    defaultValues : {
      name : "",
      email : "",
      password : "",
      rePassword : "",
      phone : ""
    },
    resolver : zodResolver(signupSchema)
  })

  async function handelSignUp(values : signupDataType){
    console.log(values);

    const res = await   fetch ("https://ecommerce.routemisr.com/api/v1/auth/signup",{ 
      body :JSON.stringify(values),
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      }
    })
    const finalRes = await res.json()
    console.log(finalRes ,"finalRes");

    if(
      res.ok
    ){
      toast.success("Sign Up Success" ,{
        position : "top-center",
        richColors : true
      })

      router.push("/auth/login")



    }else{
      toast.error(finalRes.message || "Sign Up Failed" ,{
        position : "top-center",
        richColors : true
      })
    }


  }

  return <>
  
  <div className='bg-amber-50 p-3 w-10/12 mx-auto'>

  <h1 className='text-2xl my-3'>Sign Up Page</h1>

  <form action="" onSubmit={ form.handleSubmit (handelSignUp)}>



<Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your name"
        autoComplete="off"
      />
    
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
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
<Controller
  name="rePassword"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Re-enter Password</FieldLabel>
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder="Re-enter your password"
            autoComplete="off"
            type='password'

          />
        
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
  )}
/>
<Controller
  name="phone"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder="Enter your phone number"
            autoComplete="off"
            type='tel'

          />
        
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
  )}
/>




<Button className='w-full my-2 cursor-pointer text-xl'>Sign Up</Button>





  </form>




  </div>
  
  
  
  
  
  
  
  </>
}
