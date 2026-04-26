"use client"
import React, { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { createCashOrder } from '../_actions/orders.actions';
import { shippingAddressType } from '@/types/order.type';
import { cartContext } from '../_context/CartContextProvider';

export default function Page() {

    const from = useForm<{
        details: string;
        phone: string;
        city: string;
        postalCode: string;
        type: string;
    }>(
        {
            defaultValues: {
                details: "",
                phone: "",
                city: "",
                type: "cash"

            },
        })

    const { cartId } = useContext(cartContext)

    async function handlePayment(values: {
        details: string;
        phone: string;
        city: string;
        postalCode: string;
        type: string;
    }) {

            const userData : shippingAddressType = {
                shippingAddress : {
                    postalCode : values.postalCode,
                    city : values.city,
                    phone : values.phone,
                    details : values.details
                }

            }

            if(values.type == "cash"){
             await createCashOrder( cartId ,userData)
            }

    }



    return (
        <>
            <h1 className="text-center text-5xl my-10">Payment</h1>
            <div>
                <form onSubmit={from.handleSubmit(handlePayment)} action="">

                    <Controller name='details'
                        control={from.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <label htmlFor={field.name}>Details</label>
                                <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder='Enter your details'
                                    autoComplete='off' />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

                            </Field>
                        )}>




            </Controller>







        </form>





    </div>
    
    
    
    
    
    
    
    </>
  )
}
