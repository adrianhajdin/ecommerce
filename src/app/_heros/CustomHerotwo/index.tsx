import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './index.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export const CustomHerotwo = () => {
  return (
    <div className={classes.container}>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className={classes['swiper-container']}
      >
        <SwiperSlide className={classes['swiper-slide']}>
          <Image
            src="/canva/Sacoche Noir - Story.jpg"
            width={500}
            height={500}
            alt="Sacoche Noir"
            priority // Load the image as soon as possible
          />
        </SwiperSlide>
        <SwiperSlide className={classes['swiper-slide']}>
          <Image
            src="/canva/Sacoche Noir - Story.jpg"
            width={500}
            height={500}
            alt="Sacoche Noir"
            priority
          />
        </SwiperSlide>
        <SwiperSlide className={classes['swiper-slide']}>
          <Image
            src="/canva/Sacoche Noir - Story.jpg"
            width={500}
            height={500}
            alt="Sacoche Noir"
            priority
          />
        </SwiperSlide>
        <SwiperSlide className={classes['swiper-slide']}>
          <Image
            src="/canva/Sacoche Noir - Story.jpg"
            width={500}
            height={500}
            alt="Sacoche Noir"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
