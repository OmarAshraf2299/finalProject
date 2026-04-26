"use client"
import React, { createContext, ReactNode, useState } from 'react'
import { CartitemType, CartResType } from '@/types/cart.type'

type CartContextType = {
  setCartId: (id: string) => void;
  cartId: string;
  numberOfCartItems: number;
  setNumberOfCartItems: (count: number) => void;
  totalPriceOfCart: number;
  settotalPriceOfCart: (price: number) => void;
  cartProducts: CartitemType[];
  setCartProducts: (products: CartitemType[]) => void;
}

export const cartContext = createContext<CartContextType>({} as CartContextType)


export default function CartContextProvider( { children , userCart } : { children : ReactNode , userCart : CartResType | null }) {

  // async function getDataFromaPI() {
  //   const userCart = await   getUserCart()
  //   console.log(userCart , "userCart from cartContextProvider");  
  //   setNumberOfCartItems(userCart.numOfCartItems)

  // }
  // useEffect(() => {
  //   getDataFromaPI()
  // }, [])

  
const [cartId , setCartId] = useState(userCart?.cartId || "")


    const [numberOfCartItems , setNumberOfCartItems] = useState(userCart?.numOfItems || 0)

    const [totalPriceOfCart , settotalPriceOfCart] =useState(userCart?.data?.totalCartPrice || 0)
    const [cartProducts , setCartProducts] = useState <CartitemType[]>(userCart?.data?.products || [])

  return (
    <cartContext.Provider value={{ setCartId, cartId, numberOfCartItems, setNumberOfCartItems, totalPriceOfCart, settotalPriceOfCart, cartProducts, setCartProducts }} >
        
        
        { children }




    </cartContext.Provider>
  )
}
