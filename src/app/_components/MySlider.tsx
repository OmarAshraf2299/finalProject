"use client"

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MySliderPropsType{
 listOfImages : string[],
 spaceBetwwen? : number,
 slidesPerView? : number
}
export default function MySlider( {listOfImages , spaceBetwwen = 100 , slidesPerView = 3 } : MySliderPropsType) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetwwen}
        slidesPerView={slidesPerView}
        loop={true}
        navigation
        pagination={{ clickable: true, bulletActiveClass: 'bg-white! opacity-100! w-4! h-4! rounded-full!', renderBullet: function () {
          return `<span class="swiper-pagination-bullet"></span>`;
        } }}
        style={{ height: '100%', width: '100%' }}
      >
        {listOfImages.map((image, index) => (
          <SwiperSlide key={index} style={{ height: '100%', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Product" />
            
            {/* Overlay Gradient */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, rgba(0, 201, 80, 0.85) 0%, rgba(5, 223, 114, 0.4) 100%)',
                zIndex: 5,
              }}
            />

            {/* Content Overlay */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px 60px',
                zIndex: 10,
                color: 'white',
              }}
            >
              {/* Left Content */}
              <div style={{ maxWidth: '400px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', lineHeight: '1.2' }}>
                  Fresh Products Delivered to your Door
                </h1>
                <p style={{ fontSize: '14px', marginBottom: '24px', opacity: 0.95 }}>
                  Go shopping and have a bite
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button 
                    style={{ 
                      width: '127px',
                      height: '44px',
                      backgroundColor: '#FFFFFF',
                      color: '#10B981',
                      border: '2px solid #FFFFFF',
                      padding: '8px 24px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      opacity: 1,
                    }}
                  >
                    Shop Now
                  </Button>
                  <Button 
                    style={{ 
                      width: '134px',
                      height: '44px',
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: '2px solid white',
                      padding: '8px 24px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      opacity: 1,
                    }}
                  >
                    View Deals
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

