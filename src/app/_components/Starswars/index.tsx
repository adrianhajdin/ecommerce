"use client"

import React from 'react'
import classes from './index.module.scss'
import { useState } from "react"
import slides from '../../_data/datastarswars.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


type Slide = {
  id: number;
  title: string;
  price: string;
  currency: string;
  imagebg: string;
  imageproduct: string;
  options?: Array<{
    title: string;
    choices: string[];
  }>;
  durability: {
    rate: string;
    title: string;
  };
};

export const Starswars: React.FC = () => {
  
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex: number) => {
      setCurrentIndex(slideIndex);
    };
  
    const currentSlide = slides[currentIndex];


   
    const [isFavActive, setIsFavActive] = useState(false);

    const toggleFavorite = () => {
      setIsFavActive((prevState) => !prevState);
    };
      


  return (
    // PURPLE
    
    <div className={classes.wrapper} >
      {/* VERT */}
      <button onClick={goToPrevious} className={classes.prev}>
            <span className={classes.icon}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </button>
          
          <button onClick={goToNext} className={classes.next}>
            <span className={classes.icon}>
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>

      <div className={classes.content}> 
        <div className={classes['bg-shape']}>
          {/* <Image
            src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp"
            alt=""
            width={200}
            height={100}
          /> */}
          <h1 className={`${classes['title_card']}`}>
               PROMOTION <br />
               DEALS
          </h1>
        </div>
        {/* RED */}
        <div className={`${classes['product-img']} ${classes['active']}`}>
          {/* BLUE */}
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              id={`img${index + 1}`}
              className={`${classes['product-img__item']} ${index === currentIndex ? classes.active : ''}`}
              >
              <Image
                src={slide.imageproduct}
                alt="star wars"
                className={classes['product-img__img']}
                width={200}
                height={100}
              />
            </div>
            ))}
        </div>
    
        <div className={classes['product-slider' ]}>
        
        <div className={`${classes['product-slider__wrp']} swiper-wrapper`}>
          <div className={`${classes['product-slider__item']} swiper-slide`} data-target={`img${currentSlide.id}`}>
            <div className={classes['product-slider__card']}>
              <Image
                src={currentSlide.imagebg}
                alt={currentSlide.title}
                className={classes['product-slider__cover']}
                width={200}
                height={100}
                />
              <div className={classes['product-slider__content']}>
                <h1 className={`${classes['product-slider__title']}`}>
                {currentSlide.title}
                </h1>
                <span className={classes['product-slider__price']}>
                {currentSlide.currency}{currentSlide.price}
                </span>

                <div className={classes['product-ctr']}>
                  {/* Vérifie si options est un objet ou un tableau */}
                  {Array.isArray(currentSlide.options) ? (
                    // Si options est un tableau, on parcourt chaque option pour afficher son titre et ses choix
                    currentSlide.options.map((option, index) => (
                      <div key={index} className={classes['product-labels']}>
                        <div className={classes['product-labels__title']}>{option.title}</div>
                        <div className={classes['product-labels__group']}>
                          {option.choices.map((choice) => (
                            <label className={classes['product-labels__item']} key={choice}>
                              <input
                                type="radio"
                                className={classes['product-labels__checkbox']}
                                name={`type${currentSlide.id}-${index}`} // Utilise un nom unique pour chaque groupe d'options
                                defaultChecked={choice === option.choices[0]}
                              />
                              <span className={classes['product-labels__txt']}>{choice}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                
                    
                  <div className={classes['product-labels']}>
                    <div className={classes['product-labels__title']}>
                      {currentSlide.options.title}
                    </div>
                    <div className={classes['product-labels__group']}>
                      {currentSlide.options?.choices && currentSlide.options.choices.map((choice) => (
                        <label className={classes['product-labels__item']} key={choice}>
                          <input
                            type="radio"
                            className={classes['product-labels__checkbox']}
                            name={`type${currentSlide.id}`}
                            defaultChecked={choice === currentSlide.options.choices[0]}
                          />
                          <span 
                          className={classes['product-labels__txt']}
                          >
                            {choice}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  )}

                  <span className={classes['hr-vertical']}></span>

                  <div className={classes['product-inf']}>
                    <span className={classes['product-inf__title']}>
                      {currentSlide.durability.title}
                    </span>
                    <div className={classes['product-inf__percent']}>
                      <div className={classes['product-inf__percent-circle']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                              <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                            </linearGradient>
                          </defs>
                          <circle
                            cx="50"
                            cy="50"
                            r="47"
                            strokeDasharray="240, 300"
                            stroke="#cb2240"
                            strokeWidth="4"
                            fill="none"
                            />
                        </svg>
                      </div>
                      <div className={classes['product-inf__percent-txt']}>     
                        {currentSlide.durability.rate}
                      </div>
                    </div>
                  </div>
                </div>
              

                <div className={classes['product-slider__bottom']}>
                  <button className={classes['product-slider__cart']}>ADD TO CART</button>
                  <button 
                  className={`${classes['product-slider__fav']}`}
                  onClick={toggleFavorite}
                  >
                    <span className={`${classes['heart']} ${isFavActive ? classes['is-active'] : ""}`}> </span> 
                    ADD TO WISHLIST
                  </button>
                  
                </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Starswars