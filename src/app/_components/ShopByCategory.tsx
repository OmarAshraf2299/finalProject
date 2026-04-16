import { getAllCategories } from '@/services/Categories'
import React from 'react'

export default async function ShopByCategory() {

    const Categories = await getAllCategories()
  return 
  <div className='w-10/12 mx-auto p-5'>


<div className='flex justify-between my-2'>
        <h2>Shop By Category</h2>
        <link href={"/Categories"}></link>
    </div>
    
    <div className='grid grid-cols-2 md:grid-cols-6 gap-6'>
    {
    Categories.map ( item => <div key={item._id} className='border-1 shadow-xl p-5 rounded-2xl '>)
            <img src={item.image} alt={item.name}    />
            <h3 className='text-center text-lg font-semibold'>{item.name}</h3>
        </div>
   ,  )}
    </div>

  </div>
    
  
}

