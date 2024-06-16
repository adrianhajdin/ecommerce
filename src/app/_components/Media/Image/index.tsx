'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

export const Image = ({ resources }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDone, setSlideDone] = useState(true)
  const [timeID, setTimeID] = useState(null)

  // useEffect(() => {
  //   if (slideDone) {
  //     setSlideDone(false)
  //     setTimeID(
  //       setTimeout(() => {
  //         slideNext()
  //         setSlideDone(true)
  //       }, 5000),
  //     )
  //   }
  // }, [slideDone])

  const slideNext = () => {
    setActiveIndex(val => (val >= resources.length - 2 ? 0 : val + 1))
  }

  const slidePrev = () => {
    setActiveIndex(val => (val <= 0 ? resources.length - 2 : val - 1))
  }

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID)
      setSlideDone(false)
    }
  }

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true)
    }
  }

  return (
    <div
      className={classes.container__slider}
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {resources.map((item, index) => (
        <div
          className={`${classes.slider__item} ${
            classes[`slider__item_active_${(activeIndex % resources.length) + 1}`]
          }`}
          key={index}
        >
          <img
            key={index}
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${item.filename}`}
            alt={item.alt}
          />
        </div>
      ))}
{/* 
      <div className={classes.container__slider__links}>
        {resources.slice(0, -1).map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? `${classes.container__slider__links_small} ${classes.container__slider__links_small_active}`
                : classes.container__slider__links_small
            }
            onClick={e => {
              e.preventDefault()
              setActiveIndex(index)
            }}
          ></button>
        ))}
      </div> */}

      <button
        className={classes.slider__btn_next}
        onClick={e => {
          e.preventDefault()
          slideNext()
        }}
      >
        {'>'}
      </button>
      <button
        className={classes.slider__btn_prev}
        onClick={e => {
          e.preventDefault()
          slidePrev()
        }}
      >
        {'<'}
      </button>
    </div>
  )
}
