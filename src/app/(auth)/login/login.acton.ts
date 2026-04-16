"use server"

import { cookies } from "next/headers";
import { loginDataType } from "./login.schema";

export async function loginUpAction( values : loginDataType)    {


     const res = await   fetch ("https://ecommerce.routemisr.com/api/v1/auth/login",{ 
      body :JSON.stringify(values),
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      }
    })
    const finalRes = await res.json()
    console.log(finalRes ,"finalRes");
    const cookieStore = await cookies()
    cookieStore.set("token" , finalRes.token ,
        {
            httpOnly : true,
            maxAge : 60 * 60 * 24 * 7 , // 7 days
            path : "/",
            secure : true,
            sameSite : "strict"
        }
     )
     //cookies.Get("token")
    // localStorage.setItem("token" , finalRes.token)
    return res.ok
}