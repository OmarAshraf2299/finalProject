"use client"

import React, { lazy, Suspense } from 'react'
import ProductCard from './_components/ProductCard';
import { getAllProducts } from '@/services/product';
import MySlider from './_components/MySlider';

import image1 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import image2 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import image3 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"

const ShopByCategoryAsLazyComponent = lazy(() => import('./_components/ShopByCategory'));
import loading from './loading';
import { InfinitySpin } from 'react-loader-spinner';

const images = [image1.src, image2.src, image3.src]





export default async  function Home() {

  

const products =  await getAllProducts()


  return (
    <>

    <MySlider listOfImages={images} slidesPerView={1} />




    <Suspense fallback={ <div className='w-full bg-gray-300 text-2xl text-center flex justify-center items-center '>
<InfinitySpin
width="200"
color="#4fa94d"
/></div> }>

      <ShopByCategoryAsLazyComponent />
    </Suspense>





    <h2 className='text-3xl text-emerald-400 w-10/12 mx-auto font-semibold my-2'>Products</h2>

    <div className="container mx-auto w-10/12 bg-slate-50 p-5 grid gap-5 md:grid-cols-4 xl:grid-cols-5">

{products?.map((product) => <ProductCard key={product._id} product={product} /> )}

    </div>

    
    </>
  )
}
 