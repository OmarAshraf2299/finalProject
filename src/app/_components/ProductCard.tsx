
import { ProductType } from '@/types/product .type'
import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'
import { FaEye, FaStar } from 'react-icons/fa'
import ddToCardBtn from './AddToCardBtn';
import AddToCardBtn from './AddToCardBtn';

interface ProductCardPropsType {
    product : ProductType
}

export default function ProductCard({product}: ProductCardPropsType) {

  function addProductToCart(){}



  return (
    <div style={{
      width: '275.2px',
      height: '418px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      opacity: 1,
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: '12px'
    }}>
      {/* Top Icons */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 10
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          border: '1px solid #e5e7eb',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <CiHeart style={{ fontSize: '16px' }} />
        </div>
        <Link href={`/product/${product._id}`} style={{
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          border: '1px solid #e5e7eb',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          textDecoration: 'none',
          color: 'inherit'
        }}>
          <FaEye style={{ fontSize: '14px' }} />
        </Link>
      </div>

      {/* Product Image */}
      <div style={{
        width: '100%',
        height: '160px',
        borderRadius: '6px',
        overflow: 'hidden',
        marginBottom: '12px',
        backgroundColor: '#f3f4f6'
      }}>
        <img src={product.imageCover} alt={product.title} style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }} />
      </div>

      {/* Category */}
      <p style={{
        color: '#6b7280',
        fontSize: '12px',
        margin: '0 0 8px 0'
      }}>{product.category.name}</p>

      {/* Title */}
      <h3 style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 8px 0',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>{product.title}</h3>

      {/* Rating */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '12px',
        fontSize: '12px'
      }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} style={{
              fontSize: '11px',
              color: i < Math.floor(product.ratingsAverage) ? '#fbbf24' : '#d1d5db'
            }} />
          ))}
        </div>
        <span style={{ color: '#6b7280' }}>{Math.floor(product.ratingsAverage || 0)} ({product.ratingsCount || 0})</span>
      </div>

      {/* Price */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px',
        marginBottom: '12px'
      }}>
        {product.priceAfterDiscount ? (
          <>
            <span style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#10b981'
            }}>{product.priceAfterDiscount} EGP</span>
            <span style={{
              fontSize: '12px',
              color: '#9ca3af',
              textDecoration: 'line-through'
            }}>{product.price} EGP</span>
          </>
        ) : (
          <span style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>{product.price} EGP</span>
        )}
      </div>

      {/* Add to Cart Button */}
      <AddToCardBtn productId={product._id} />
    </div>
  )
}
