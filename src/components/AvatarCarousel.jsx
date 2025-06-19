
"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const avatars = [
  {
    id: 1,
    name: 'Monye Matt',
    uses: '20k Use',
    imageUrl: '/avatar.png', 
  },
  {
    id: 2,
    name: 'Alex Starr',
    uses: '15k Use',
    imageUrl: '/avatar.png',
  },
  {
    id: 3,
    name: 'Jenna Flow',
    uses: '32k Use',
    imageUrl: '/avatar.png',
  },
  {
    id: 4,
    name: 'David Code',
    uses: '18k Use',
    imageUrl: '/avatar.png',
  },
  {
    id: 5,
    name: 'Sara Design',
    uses: '25k Use',
    imageUrl: '/avatar.png',
  },
];

export default function AvatarCarousel() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-[#03061C] overflow-hidden">
      <div className="absolute -z-10 top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3, 
          slideShadows: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[EffectCoverflow, Navigation]}
        className="w-full max-w-4xl"
      >
        {avatars.map((avatar) => (
          <SwiperSlide key={avatar.id} style={{ width: '300px', height: '400px' }}>
            <div className="relative w-full h-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex flex-col items-center justify-between overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(237,108,80,0.4)_0%,rgba(192,132,252,0.3)_50%,rgba(255,255,255,0)_70%)] opacity-70 blur-2xl"></div>

              <h3 className="z-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                {avatar.uses}
              </h3>

              <div className="z-10 w-48 h-48">
                <Image
                  src={avatar.imageUrl}
                  alt={avatar.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <h4 className="z-10 text-2xl font-bold text-white/90">
                {avatar.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="swiper-button-prev-custom absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white/50 hover:text-white transition-colors">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white/50 hover:text-white transition-colors">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
}