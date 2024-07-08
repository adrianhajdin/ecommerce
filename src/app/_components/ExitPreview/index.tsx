// components/ExitPreviewButton.tsx

"use client"

import React from 'react'

const handleExitPreview = async () => {
  const response = await fetch('/api/exit-preview')
  if (response.ok) {
    window.location.reload()
  } else {
    console.error('Failed to exit preview mode')
  }
}

const ExitPreviewButton: React.FC = () => {
  return (
    <button onClick={handleExitPreview}>
      Sair
    </button>
  )
}

export default ExitPreviewButton
