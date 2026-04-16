import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { async } from './../services/Categories';


export const nextAuthConfig : NextAuthOptions ={


    providers : [
        Credentials({
            name : "Credentials",
            credentials : {
                email : { label : "Email" , type : "text" , placeholder : "Enter your email" },
                password : { label : "Password" , type : "password" , placeholder : "Enter your password" }
            },
            async authorize(credentials){


                
     const res = await   fetch ("https://ecommerce.routemisr.com/api/v1/auth/login",{ 
      body :JSON.stringify(credentials),
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      }
    })
    const finalRes = await res.json()
    console.log(finalRes ,"finalRes");

    if (finalRes.message == "success") {
        return {

            name : finalRes.user.name,
            email : finalRes.user.email,
            realTokenFromBackend : finalRes.token
        }
    }

                return null //{}
            }

        })
    ],







    pages : {
        signIn : "/login"
    },


    secret : process.env.BETTER_AUTH_SECRET,

}