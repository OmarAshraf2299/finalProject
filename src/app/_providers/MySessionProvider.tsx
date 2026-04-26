"use client"

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface MySessionProviderProps {
  children: ReactNode
}

export default function MySessionProvider({ children }: MySessionProviderProps) {
  return <>
  <SessionProvider>

        {children}


  </SessionProvider>
   
  
  </>
}
