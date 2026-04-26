"use client"
import React, { useContext } from 'react'
import { addProductToCart } from '../_actions/cart.actions';
import { toast } from 'sonner';
import { cartContext } from '../_context/CartContextProvider';

export default function AddToCardBtn( {productId} : {productId : string} ) {
  const { setNumberOfCartItems , settotalPriceOfCart ,setCartProducts} = useContext(cartContext)

  async function handeladdToCart (){

    const res = await addProductToCart(productId)

    if (res.status == "success"){
      toast.success(res.message , {position : "top-center" , richColors : true})
      if (res.numOfItems !== undefined) {
        setNumberOfCartItems(res.numOfItems)
      }
      if (res.data?.products) {
        setCartProducts(res.data.products)
      }
      if (res.data?.totalCartPrice !== undefined) {
        settotalPriceOfCart(res.data.totalCartPrice)
      }
    } else {
      toast.error(res.message || "Failed to add item to cart", {position : "top-center" , richColors : true})
    }

  }


  return (
    <button 
        onClick={ handeladdToCart} 
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#10b981',
          color: '#ffffff',
          borderRadius: '50%',
          border: 'none',
          fontSize: '24px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: 'auto',
          alignSelf: 'flex-end',
          transition: 'background-color 300ms',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} 
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
      >
        +
      </button>
  )
}
