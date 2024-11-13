"use client"

import Background from "hero-slider/dist/components/Slide/Background";
import ImageSlider from "./ImageSlider"
import { BackgroundColor } from "../../_components/BackgroundColor";
import { redirect } from "next/dist/server/api-utils";

export const CustomHerotwo = () => {
  const slides = [
    { url: "https://www.canva.com/design/DAGU0dhf4l0/u_iX7Tzx6xvDdutBxcU48w/edit?utm_content=DAGU0dhf4l0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", title: "beach" },
    { url: "https://cdn.prod.website-files.com/6243c3bb3b5a1852803d0c7f/64ac9b4418ae081acf7be4e8_hero-section-examples.jpg", title: "boat" },
    { url: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-1-bg.webp", title: "forest" },
    { url: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp", title: "city" },
    { url: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-2-bg.webp", title: "italy" },
  ];
  const containerStyles = {
    // width: "500px",
    height: '550px',
    margin: "0 auto",
   /*  backgroundColor: "red", */
    };



  return (
    <div>
      
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        
      </div>
    </div>
  );
};


