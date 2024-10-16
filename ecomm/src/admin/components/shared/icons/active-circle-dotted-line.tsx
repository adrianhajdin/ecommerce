import React from "react";
import IconProps from "../../../types/icon-type";

const ActiveCircleDottedLine: React.FC<IconProps> = ({
  size = "24",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <g filter="url(#filter0_d_8860_2802)">
        <rect x="3" y="3" width="20" height="20" rx="10" fill="white"/>
        <path d="M15.5 5.93589C13.884 5.3547 12.116 5.3547 10.5 5.93589" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.63037 11.632C5.94283 9.94471 6.82561 8.41606 8.13082 7.30209" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.13082 18.6979C6.82563 17.5839 5.94286 16.0552 5.63037 14.368" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 20.0641C12.116 20.6453 13.884 20.6453 15.5 20.0641" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.3696 11.632C20.0571 9.94471 19.1744 8.41606 17.8691 7.30209" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.8691 18.6979C19.1743 17.5839 20.0571 16.0552 20.3696 14.368" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_d_8860_2802" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_8860_2802"/>
          <feOffset/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.509804 0 0 0 0 0.964706 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8860_2802"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8860_2802" result="shape"/>
        </filter>
      </defs>
    </svg>

  );
};

export default ActiveCircleDottedLine;
