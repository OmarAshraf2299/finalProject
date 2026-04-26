import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const nextAuthConfig : NextAuthOptions ={


    providers : [
        Credentials({
            name : "Credentials",
            credentials : {
                email : { label : "Email" , type : "text" , placeholder : "Enter your email" },
                password : { label : "Password" , type : "password" , placeholder : "Enter your password" }
            },
            async authorize(credentials) {
              try {
                console.log("Attempting login with:", { email: credentials?.email })
                
                const res = await fetch("https://ecommerce.routemisr.com/api/v2/auth/login", { 
                  body: JSON.stringify(credentials),
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                
                console.log("API Response status:", res.status)
                
                const textResponse = await res.text()
                console.log("API Response body:", textResponse)
                
                if (!res.ok) {
                  console.error(`Auth API error: ${res.status} ${res.statusText}`, textResponse)
                  throw new Error(`API error: ${res.status} ${res.statusText} - ${textResponse}`)
                }
                
                const finalRes = JSON.parse(textResponse)
                console.log("Parsed API Response:", finalRes)

                if (finalRes.message === "success" && finalRes.token && finalRes.user) {
                  return {
                    id: finalRes.user._id,
                    name: finalRes.user.name,
                    email: finalRes.user.email,
                    realTokenFromBackend: finalRes.token
                  } as any // eslint-disable-line @typescript-eslint/no-explicit-any
                }
                
                console.error("Login failed - invalid credentials or API response", finalRes)
                throw new Error(finalRes.message || "Invalid credentials")
                
              } catch (error) {
                console.error("Auth error:", error)
                if (error instanceof Error) {
                  throw new Error(error.message)
                }
                throw new Error("Authentication failed")
              }
            }

        })
    ],

    callbacks : {
        jwt(params) {
          if (params.user) {
            (params.token as any).realTokenFromBackend = (params.user as any).realTokenFromBackend // eslint-disable-line @typescript-eslint/no-explicit-any
          }
          console.log(params, "params from jwt");
          return params.token
        },


        session(params){
            console.log(params ,"params from session");
            




            return params.session
        
        
        }




    },



session : {
    strategy : "jwt",
    maxAge : 60 * 60 * 24 * 7 , // 7 days
},



    pages : {
        signIn : "/login"
    },


    secret : process.env.BETTER_AUTH_SECRET,

}