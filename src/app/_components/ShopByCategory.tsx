import { getAllCategories } from '@/services/Categories'
import React from 'react'

export default async function ShopByCategory() {
  let Categories = await getAllCategories()
  
  // Reorder categories to put Books and Home next to each other
  const booksIndex = Categories.findIndex(cat => cat.name.toLowerCase().includes('book'))
  const homeIndex = Categories.findIndex(cat => cat.name.toLowerCase().includes('home'))
  
  if (booksIndex !== -1 && homeIndex !== -1) {
    const books = Categories[booksIndex]
    const home = Categories[homeIndex]
    
    // Remove both from original positions
    Categories = Categories.filter((_, i) => i !== booksIndex && i !== homeIndex)
    
    // Add Books first, then Home at the beginning
    Categories = [books, home, ...Categories]
  }
  return (
    <div style={{
      width: '100%',
      height: '444px',
      maxWidth: '1536px',
      top: '697px',
      left: '0px',
      gap: '32px',
      opacity: 1,
      paddingRight: '16px',
      paddingLeft: '16px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <h2 className='text-2xl font-bold text-gray-800 flex items-center gap-2'>
          <span className='w-1 h-8 bg-emerald-500 rounded'></span>
          Shop By Category
        </h2>
        <a href="/Categories" style={{
          color: '#10b981',
          fontSize: '14px',
          fontWeight: '500',
          textDecoration: 'none',
          marginLeft: 'auto'
        }} className='hover:underline'>View All Categories →</a>
      </div>
      
      <div style={{
        width: '100%',
        height: '312px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '12px',
        opacity: 1
      }}>
        {Categories.map((item) => (
          <div key={item._id} style={{
            width: '237.33px',
            height: '148px',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid #e5e7eb',
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            transition: 'box-shadow 300ms ease',
            cursor: 'pointer'
          }} className='hover:shadow-lg'>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '33554400px',
              opacity: 1,
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', margin: 0 }}>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

