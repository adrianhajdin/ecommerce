import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './index.module.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const containerStyles = {
  height: '550px',
  margin: "0 auto",
  backgroundColor: "red",
  };




  export const CustomHerotwo = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={containerStyles}
      >
        <SwiperSlide>
        <Image
      src="/canva/Sacoche Noir - Story.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> 
        </SwiperSlide>
        <SwiperSlide>
          <Image
      src="/canva/Sacoche Noir - Story.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> 
    </SwiperSlide>
        <SwiperSlide>
          <Image
      src="/canva/Sacoche Noir - Story.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> 
    </SwiperSlide>
        <SwiperSlide>
          <Image
      src="/canva/Sacoche Noir - Story.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> 

        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}