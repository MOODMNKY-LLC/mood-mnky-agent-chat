'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const audioFiles = [
  'song1.mp3',
  'song2.mp3',
  'song3.mp3',
  // Add all your mp3 files here
]

export function SemiTransparentCompactPillAudioPlayerComponent() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const onSliderChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const skipTrack = (direction: 'forward' | 'backward') => {
    let newIndex = direction === 'forward' ? currentTrackIndex + 1 : currentTrackIndex - 1
    if (newIndex < 0) newIndex = audioFiles.length - 1
    if (newIndex >= audioFiles.length) newIndex = 0
    setCurrentTrackIndex(newIndex)
    setIsPlaying(false)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }, 0)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background/70 backdrop-blur-sm border border-border/50 rounded-full shadow-lg p-2 flex items-center space-x-2 max-w-md w-full">
      <audio ref={audioRef} src={`/audio/${audioFiles[currentTrackIndex]}`} />
      
      <Button onClick={() => skipTrack('backward')} variant="ghost" size="icon" className="h-6 w-6 shrink-0 bg-transparent hover:bg-white/20">
        <SkipBack className="h-3 w-3" />
      </Button>
      
      <Button onClick={togglePlayPause} variant="ghost" size="icon" className="h-6 w-6 shrink-0 bg-transparent hover:bg-white/20">
        {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
      </Button>
      
      <Button onClick={() => skipTrack('forward')} variant="ghost" size="icon" className="h-6 w-6 shrink-0 bg-transparent hover:bg-white/20">
        <SkipForward className="h-3 w-3" />
      </Button>
      
      <div className="flex-grow flex items-center space-x-2 min-w-0">
        <span className="text-xs text-foreground/80 w-8 text-right">{formatTime(currentTime)}</span>
        <Slider
          value={[currentTime]}
          max={duration}
          step={0.1}
          onValueChange={onSliderChange}
          className="flex-grow"
        />
        <span className="text-xs text-foreground/80 w-8">{formatTime(duration)}</span>
      </div>
      
      <div className="text-xs font-medium truncate w-20 text-right text-foreground/80">
        {audioFiles[currentTrackIndex]}
      </div>
    </div>
  )
}