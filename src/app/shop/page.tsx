"use client"
import React, { useContext } from 'react';
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cartContext } from '../_context/CartContextProvider';
import { CartitemType } from '@/types/cart.type';
import { deleteItemFromCart, UpdateProductCart } from '../_actions/cart.actions';
import { toast } from 'sonner';




export default function Page() {
  return <CartContent />
}

function CartContent() {
  const context = useContext(cartContext);
  
  if (!context) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Unable to load cart</p>
        </div>
      </div>
    )
  }
  
  const { cartProducts, totalPriceOfCart, numberOfCartItems, setNumberOfCartItems, settotalPriceOfCart, setCartProducts } = context;


  async function handelDeleteItem(id: string) {
    try {
      const res = await deleteItemFromCart(id)
      if (res.data?.products) {
        setCartProducts(res.data.products)
      }
      if (res.numOfItems !== undefined) {
        setNumberOfCartItems(res.numOfItems)
      }
      if (res.data?.totalCartPrice) {
        settotalPriceOfCart(res.data.totalCartPrice)
      }
      toast.success(res.message, { position: "top-center", richColors: true })
    } catch (error) {
      toast.error("Failed to delete item", { position: "top-center", richColors: true })
      console.error(error)
    }
  }


  async function handelUpdate(id: string, count: number) {
    try {
      const res = await UpdateProductCart(id, count)

      if (res.status == "success") {
        if (res.data?.products) {
          setCartProducts(res.data.products)
        }
        if (res.numOfItems !== undefined) {
          setNumberOfCartItems(res.numOfItems)
        }
        if (res.data?.totalCartPrice) {
          settotalPriceOfCart(res.data.totalCartPrice)
        }
        toast.success(res.message, { position: "top-center", richColors: true })
      } else {
        toast.error(res.message, { position: "top-center", richColors: true })
      }
    } catch (error) {
      toast.error("Failed to update cart", { position: "top-center", richColors: true })
      console.error(error)
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {/* Cart Items list */ }

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start lg:gap-y-8">
          <div className="lg:col-span-8">
            <div className="bg-white shadow sm:rounded-lg overflow-hidden border border-gray-200">
              <ul role="list" className="divide-y divide-gray-200">
                        {/* product 1 */ }


              {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map ((item :CartitemType)=> <li key={item.product._id} className="flex py-6 px-4 sm:px-6 hover:bg-gray-50 transition-colors">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                    src= {item.product.imageCover}
                    alt={item.product.title}
                    width={96} 
                    height={96}
                    className="h-full w-full object-cover object-center"/>
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <span className="cursor-pointer hover:underline">{ item.product.title}</span>
                        </h3>
                        <p className="ml-4 font-bold text-green-600">${ item.price}</p>

                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.product.brand?.name || 'N/A'}</p>
                      <p className="mt-1 text-sm text-gray-400">{item.product.category?.name || 'N/A'}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center space-x-2 border rounded-md p-1 bg-white">

                          <button 
                          type="button"
                          className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 "
                          aria-label="Decrease quantity"
                          onClick={ ()=> handelUpdate (item.product._id , item.count - 1)}
                          >
                            <Minus className="h-4 w-4"  />



                          </button>
                          <span className="font-medium text-gray-900 w-8 text-center">{item.count}</span>



                          <button type="button" className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 " aria-label="Increase quantity"
                            onClick={ ()=> handelUpdate (item.product._id , item.count + 1)}
>

                              <Plus className="h-4 w-4"  />

                          </button>
                        </div>

                        <div className='flex'>
                          <button type = "button"
                          className='flex items-center text-red-500 hover:text-red-700 font-medium transition-colors '
                          onClick={()=> handelDeleteItem(item.product._id)} >
                            <Trash2 className='h-4 w-4 mr-1' />
                            Remove
                          </button>

                        </div>

                      </div>


                  </div>





                </li>
                )
              ) : (
                <li className="flex justify-center items-center py-12 px-4">
                  <div className="text-center">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                    <Link href="/" className="text-blue-600 hover:underline">Continue Shopping</Link>
                  </div>
                </li>
              )}
                





              </ul>





            </div>



          </div>


        {/* order summary */ }
        <div className='lg:col-span-4 mt-8 lg:mt-0'>
          <div className='bg-white shadow sm:rounded-lg overflow-hidden border border-gray-200 p-6'>
            <h2 className='text-lg font-medium text-gray-900 mb-4 border-b border-gray-200'>Order Summary</h2>
            
            <dl className='mt-2 space-y-4'>
              <div className='flex items-center justify-between border-b border-gray-100 pb-4'>
                <dt className='text-sm text-gray-600'>Total items</dt>
                <dd className='text-sm font-medium text-gray-900'>{numberOfCartItems}</dd>
              </div>

              <div className='flex items-center justify-between p-4'>
                <dt className='text-base font-bold text-gray-900'>Total Price</dt>
                <dd className='text-base font-bold text-indigo-600'>${totalPriceOfCart || 0}</dd>
              </div>
            </dl>

            <div className='mt-6'>
              <Link href="/payment" className="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700">
                Proceed to Checkout
              </Link>
            </div>



          </div>

        </div>






        </div>

      </div>



















    </div>
  )
}
