import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function getMyToken() {
  const myCookies = await cookies()
  const tokenFromCookies = myCookies.get("next-auth.session-token")
  
  if (!tokenFromCookies) return null
  
  const myTokenAfterDecoded = await decode({ token: tokenFromCookies.value, secret: process.env.NEXTAUTH_SECRET! })
  
  if (!myTokenAfterDecoded) return null
  
  return (myTokenAfterDecoded as any).realTokenFromBackend || null // eslint-disable-line @typescript-eslint/no-explicit-any
}