"use server"
import { shippingAddressType } from "@/types/order.type"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

async function getMyToken() {
  const myCookies = await cookies()
  const tokenFromCookies = myCookies.get("next-auth.session-token")
  
  if (!tokenFromCookies) return null
  
  const myTokenAfterDecoded = await decode({ token: tokenFromCookies.value, secret: process.env.NEXTAUTH_SECRET! })
  
  if (!myTokenAfterDecoded) return null
  
  return (myTokenAfterDecoded as any).realTokenFromBackend || null // eslint-disable-line @typescript-eslint/no-explicit-any
}

export  async function createCashOrder(cartId : string , shippingAddress : shippingAddressType ){

    const token = await getMyToken()
    const res = await fetch("https://ecommerce.routemisr.com/api/v2/orders/${cartId}",{
        headers: {
            token : token as string , 
            "Content-Type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify(shippingAddress)
   
    } )

    const finalRes = await res.json()
    return finalRes
}