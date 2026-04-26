import React, { lazy, Suspense } from 'react'
import ProductCard from './_components/ProductCard';
import { getAllProducts } from '@/services/product';
import MySlider from './_components/MySlider';
import { FaTruck, FaLock, FaUndo, FaHeadphones } from 'react-icons/fa';

import image1 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import image2 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import image3 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"

const ShopByCategoryAsLazyComponent = lazy(() => import('./_components/ShopByCategory'));
import { InfinitySpin } from 'react-loader-spinner';

const images = [image1.src, image2.src, image3.src]





export default async function Home() {
  const products = await getAllProducts()


  return (
    <>

    <MySlider listOfImages={images} slidesPerView={1} />

    {/* Features Section */}
    <div style={{
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: '32px 224px',
      opacity: 1,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {/* Free Shipping */}
        <div style={{
          height: '80px',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          opacity: 1,
          gap: '12px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            minWidth: '48px',
            borderRadius: '33554400px',
            backgroundColor: '#FEF2F2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2B7FFF',
            opacity: 1,
            position: 'relative',
          }}>
            <FaTruck style={{ width: '22.5px', height: '18.75px', opacity: 1 }} />
          </div>
          <div>
            <h3 style={{ fontWeight: '600', color: '#1F2937', marginBottom: '4px', fontSize: '14px', margin: 0 }}>Free Shipping</h3>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>On orders over 500 EGP</p>
          </div>
        </div>

        {/* Secure Payment */}
        <div style={{
          height: '80px',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          opacity: 1,
          gap: '12px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            minWidth: '48px',
            borderRadius: '33554400px',
            backgroundColor: '#ECFDF5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00BC7D',
            opacity: 1,
            position: 'relative',
          }}>
            <FaLock style={{ width: '22.5px', height: '18.75px', opacity: 1 }} />
          </div>
          <div>
            <h3 style={{ fontWeight: '600', color: '#1F2937', marginBottom: '4px', fontSize: '14px', margin: 0 }}>Secure Payment</h3>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>100% secure transactions</p>
          </div>
        </div>

        {/* Easy Returns */}
        <div style={{
          height: '80px',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          opacity: 1,
          gap: '12px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            minWidth: '48px',
            borderRadius: '33554400px',
            backgroundColor: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF6900',
            opacity: 1,
            position: 'relative',
          }}>
            <FaUndo style={{ width: '22.5px', height: '18.75px', opacity: 1 }} />
          </div>
          <div>
            <h3 style={{ fontWeight: '600', color: '#1F2937', marginBottom: '4px', fontSize: '14px', margin: 0 }}>Easy Returns</h3>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>10-day return policy</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div style={{
          height: '80px',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          opacity: 1,
          gap: '12px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            minWidth: '48px',
            borderRadius: '33554400px',
            backgroundColor: '#F9FAFB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#AD46FF',
            opacity: 1,
            position: 'relative',
          }}>
            <FaHeadphones style={{ width: '22.5px', height: '18.75px', opacity: 1 }} />
          </div>
          <div>
            <h3 style={{ fontWeight: '600', color: '#1F2937', marginBottom: '4px', fontSize: '14px', margin: 0 }}>24/7 Support</h3>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>Dedicated support team</p>
          </div>
        </div>
      </div>
    </div>

    <Suspense fallback={ <div className='w-full bg-gray-300 text-2xl text-center flex justify-center items-center '>
<InfinitySpin
width="200"
color="#4fa94d"
/></div> }>

      <ShopByCategoryAsLazyComponent />
    </Suspense>





    <h2 className='text-3xl text-emerald-400 w-10/12 mx-auto font-semibold my-2'>Products</h2>

    <div style={{
      width: '100%',
      height: '3556px',
      maxWidth: '1536px',
      top: '1633px',
      left: '0px',
      gap: '32px',
      opacity: 1,
      paddingRight: '32px',
      paddingLeft: '32px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '100%',
        height: '3488px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        opacity: 1
      }}>
        {products?.map((product) => <ProductCard key={product._id} product={product} /> )}
      </div>
    </div>

    
    </>
  )
}
 