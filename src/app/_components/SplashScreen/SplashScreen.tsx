// src/components/SplashScreen.tsx
'use client'

import React from 'react'

type SplashScreenProps = {
  videoPath: string
}

const SplashScreen: React.FC<SplashScreenProps> = ({ videoPath }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: 'black',
      }}
    >
      <video
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${videoPath}`}
        autoPlay
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}

export default SplashScreen
