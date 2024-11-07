'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
}

export function ImageWithFallback({ 
  src, 
  fallbackSrc, 
  alt,
  className 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  
  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      className={className}
      width={500}
      height={500}
      priority={false}
      quality={75}
    />
  )
} 