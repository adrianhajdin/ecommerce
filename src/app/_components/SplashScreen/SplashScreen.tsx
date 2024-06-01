// src/components/SplashScreen.tsx
'use client'

const SplashScreen: React.FC = () => {
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
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/intro.mp4`}
        autoPlay
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}

export default SplashScreen
