// Import Swiper React components
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={spaceBetwwen}
    slidesPerView={slidesPerView}
    loop={true}
    navigation
    pagination={{ clickable: true, bulletActiveClass: 'bg-emerald-400! opacity-100! w-5! rounded-2xl! '  , renderBullet : function (index, className) {
      return `<img src={image} className='w-full  h-120 object-cover' alt="Product" />`;
    } }}
    

    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
    {listOfImages.map( image => <SwiperSlide> <img src={image} className='w-full  h-120 object-cover' alt="Product" /> </SwiperSlide>)}

    </Swiper>
);
};
