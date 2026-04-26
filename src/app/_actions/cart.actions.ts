"use server"

import { CartResType } from "@/types/cart.type"
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

export async function addProductToCart( id : string): Promise<CartResType> {

console.log("add to cart")    
    const token = await getMyToken()

    if (!token) {
        return { cartId: '', message: 'No token found. Please login first', status: 'fail', numOfItems: 0, data: { totalCartPrice: 0, products: [] } } as CartResType
    }

        const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart" , { 
            method : "POST",
            body : JSON.stringify({ productId : id }),

            headers : {

                "Content-Type" : "application/json",
                token : token as string
            }
    })

    const finalRes = await res.json()
    console.log(finalRes , "finalRes from addProductToCart");

return finalRes



}


export async  function getUserCart(): Promise<CartResType> {
    const token = await getMyToken()


    const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart",{

headers :{
        token : token as string
    }


    })
    const finalRes = await res.json()
    console.log(finalRes , "finalRes from getUserCart");
    return finalRes
    
}



export async  function deleteItemFromCart( productId : string): Promise<CartResType> {
    const token = await getMyToken()


    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{

headers :{
        token : token as string
    },
method : "DELETE"


    })
    const finalRes = await res.json()
    return finalRes
    
}




export async  function UpdateProductCart( id : string , count : number): Promise<CartResType> {
    const token = await getMyToken()
    
    if (!token) {
        return { cartId: '', message: 'No token found. Please login first', status: 'fail', numOfItems: 0, data: { totalCartPrice: 0, products: [] } } as CartResType
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
        method : "PUT",
        body : JSON.stringify({ count }),

headers :{
    "Content-Type" : "application/json",
        token : token as string
    },



    })
    const finalRes = await res.json()
    return finalRes
    
}


export async function clearCart(): Promise<CartResType> {
    const token = await getMyToken()

    const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
        method: "DELETE",
        headers: {
            token: token as string
        }
    })
    
    const finalRes = await res.json()
    console.log(finalRes, "finalRes from clearCart")
    return finalRes
}