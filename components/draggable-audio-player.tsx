'use client'

import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import BgAudioPlayer from '@/components/bg-audio-player'
import { GripHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DraggableAudioPlayer() {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 16, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set initial position after component mounts
    setPosition({ 
      x: 16, 
      y: typeof window !== 'undefined' ? window.innerHeight - 100 : 0 
    })
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent hydration issues
  }

  return (
    <Draggable
      handle=".drag-handle"
      bounds="body"
      defaultPosition={position}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div className="fixed flex items-center gap-2 touch-none z-50">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 shrink-0 bg-background/70 backdrop-blur-sm hover:bg-white/20 drag-handle cursor-move"
        >
          <GripHorizontal className="h-4 w-4" />
        </Button>
        <div className={isDragging ? 'cursor-grabbing' : 'cursor-grab'}>
          <BgAudioPlayer />
        </div>
      </div>
    </Draggable>
  )
} 