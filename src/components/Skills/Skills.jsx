import { slides } from '../../../data/infor';  
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';  

const Skills = () => {  
  return (  
    <div className="p-4">  
      <h1 className='py-12 flex justify-center items-center text-3xl gap-4 flex-wrap font-medium lg:text-6xl md:text-4xl text-blue-950'>  
        My {' '}  
        <span className='text-purple-600'>Skills</span>  
      </h1>  
      <Swiper  
        spaceBetween={20} 
        slidesPerView={3} 
        onSlideChange={() => console.log('slide change')}  
        onSwiper={(swiper) => console.log(swiper)}  
        className='cursor-grabbing'  
        breakpoints={{  
          320: {   
            slidesPerView: 1,  
            spaceBetween: 10,
          },  
          480: {  
            slidesPerView: 2,  
            spaceBetween: 20,   
          },  
          640: {
            slidesPerView: 3,
            spaceBetween: 30, 
          },  
          1024: { 
            slidesPerView: 3,
            spaceBetween: 40,   
          },  
        }}  
      >  
        {slides.map((item, index) => {  
          return (  
            <SwiperSlide key={index} className='pb-20'>  
              <div className='p-5 flex gap-4 hover:shadow-2xl flex-col bg-slate-900 justify-center items-center text-center border border-red-300 rounded-3xl w-full h-[400px] md:h-[300px]'> 
                <div className='text-emerald-50 text-lg'>{item.title}</div>  
                <div className='text-gray-400'>{item.disc}</div>  
              </div>  
            </SwiperSlide>  
          );  
        })}  
      </Swiper>  
    </div>  
  );  
}  

export default Skills;