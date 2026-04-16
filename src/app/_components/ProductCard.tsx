import { ProductType } from '@/types/product .type'
import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaEye, FaStar } from 'react-icons/fa'

interface ProductCardPropsType {
    product : ProductType
}

export default function ProductCard({product}: ProductCardPropsType) {
  return 
    <>
    

    (<div   className="p-3 border rounded-xl relative">
    <div className='absolute top-4 right-1.5'> 
    
    <div  className='bg-white cursor-pointer border shadow-2xl h-8 w-8 rounded-full flex items-center justify-center'> <CiHeart /> </div>
    <Link href={`/product/${product._id}`}  className='bg-white cursor-pointer mt-2.5 border shadow-2xl h-8 w-8 rounded-full flex items-center justify-center'> <FaEye /> </Link>
    
      
    </div>
    
            <img src={product.imageCover} alt={product.title} className='w-full' />
            <p className='text-gray-600 text-xs mt-3'>{product.category.name}</p>
            <h3 className='text-lg font-semibold'>{product.title.split(" ",2).join(" ")}</h3>
            <div className='flex items-center gap-2'><FaStar className='text-yellow-500' /> {product.ratingsAverage}</div>
    
               <div className='flex justify-between items-center mt-3'>
                        {product.priceAfterDiscount ? <div><span className='text-emerald-500 text-xl font-semibold' >{product.priceAfterDiscount}EGP</span> <span className='text-red-500 text-xs line-through'>{product.price}EGP</span></div> : <h4 className='text-xl font-semibold'>${product.price} EGP</h4> }
    
                
                
                <button className='bg-emerald-500 text-2xl text-white rounded-full h-10 w-10'>+</button>
                
                
                
                
                
                
                </div>        
    
    
    
          </div>)
    
    </>
  
}
