'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Volume1, Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function BgAudioPlayer() {
  const [audioFiles, setAudioFiles] = useState<string[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [autoplayAttempted, setAutoplayAttempted] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Fetch audio files
    const fetchAudioFiles = async () => {
      try {
        const response = await fetch('/api/audio-files')
        if (response.ok) {
          const files = await response.json()
          setAudioFiles(files)
        } else {
          console.error('Failed to fetch audio files')
        }
      } catch (error) {
        console.error('Error fetching audio files:', error)
      }
    }

    fetchAudioFiles()
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || audioFiles.length === 0) return

    const attemptAutoplay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Autoplay prevented. User interaction required.')
        setIsPlaying(false)
      } finally {
        setAutoplayAttempted(true)
      }
    }

    if (!autoplayAttempted) {
      attemptAutoplay()
    }

    return () => {
      audio.pause()
    }
  }, [autoplayAttempted, audioFiles])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume
    }
  }, [volume])

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

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
    setIsMuted(!isMuted)
  }

  const adjustVolume = (direction: 'up' | 'down') => {
    setVolume(prevVolume => {
      const newVolume = direction === 'up' ? prevVolume + 0.1 : prevVolume - 0.1
      return Math.max(0, Math.min(1, newVolume))
    })
  }

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="h-4 w-4" />
    if (volume < 0.5) return <Volume1 className="h-4 w-4" />
    return <Volume2 className="h-4 w-4" />
  }

  return (
    <div className="fixed bottom-4 left-4 group">
      <div className="mb-2 bg-background/70 backdrop-blur-sm border border-border/50 rounded-md p-2 text-xs font-medium text-foreground/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-0 mb-2">
        Now Playing: {audioFiles[currentTrackIndex] || 'Loading...'}
      </div>
      <div className="bg-background/70 backdrop-blur-sm border border-border/50 rounded-full shadow-lg p-2 flex items-center space-x-2">
        {audioFiles.length > 0 && (
          <audio ref={audioRef} src={`/audio/${audioFiles[currentTrackIndex]}`} loop={true} />
        )}
        
        <Button onClick={() => skipTrack('backward')} variant="ghost" size="icon" className="h-8 w-8 shrink-0 bg-transparent hover:bg-white/20">
          <SkipBack className="h-4 w-4" />
        </Button>
        
        <Button onClick={togglePlayPause} variant="ghost" size="icon" className="h-8 w-8 shrink-0 bg-transparent hover:bg-white/20">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <Button onClick={() => skipTrack('forward')} variant="ghost" size="icon" className="h-8 w-8 shrink-0 bg-transparent hover:bg-white/20">
          <SkipForward className="h-4 w-4" />
        </Button>

        <Button onClick={() => adjustVolume('down')} variant="ghost" size="icon" className="h-8 w-8 shrink-0 bg-transparent hover:bg-white/20">
          <Minus className="h-4 w-4" />
        </Button>

        <Button onClick={() => adjustVolume('up')} variant="ghost" size="icon" className="h-8 w-8 shrink-0 bg-transparent hover:bg-white/20">
          <Plus className="h-4 w-4" />
        </Button>

        <Button onClick={toggleMute} variant="ghost" size="icon" className="h-8 w-8 shrink-0 bg-transparent hover:bg-white/20">
          {getVolumeIcon()}
        </Button>
      </div>

      <div className="mt-2 bg-background/70 backdrop-blur-sm border border-border/50 rounded-md p-2 text-xs font-medium text-foreground/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-0 mt-2">
        {!isPlaying && autoplayAttempted ? "Click play to start music" : ""}
      </div>
    </div>
  )
}
