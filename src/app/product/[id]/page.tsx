import { Button } from '@/components/ui/button';
import { getProductById } from '@/services/product';
import React from 'react'
import { FaStar } from 'react-icons/fa';

export default async function page({params}) {
  const myPrams = await params
  console.log(myPrams , "myPrams");

  const product = await getProductById(myPrams.id)

  return (
    <div className='h-screen bg-gray-100 p-3 grid grid-cols-4 items-center gap-4 w-10/12 mx-auto'>


      <div className='col-span-1 '> <img className='w-full' src={product?.imageCover} alt={product?.title} /> </div>
      
      <div className='col-span-3'>


      <div>
        <span className='text-xs text-white bg bg-emerald-500 rounded-2xl p-3 mx-3'>{product?.category.name}</span>
        <span className='text-xs text-white bg bg-emerald-500 rounded-2xl p-3 mx-3'>{product?.brand.name}</span>
      </div>

      <h2 className='text-2xl font-semibold my-3'>{product?.title}</h2>

      <div className='flex gap-2 items-center'><FaStar className='text-yellow-500'/>{product?.ratingsAverage}</div>
      <p className='text-gray-600 mt-3'>{product?.description}</p>

<div className='flex gap-2 mt-4 p-4'>
      <Button className='w-1/2 text-2xl py-5 cursor-pointer bg-emerald-500'> Add to Cart </Button>
      <Button className='w-1/2 text-2xl py-5 cursor-pointer bg-sky-500'> Add to wishlist </Button>
</div>


        

      </div>
      
      
      
      
      
      
      
      
      
      </div>
  )
}
