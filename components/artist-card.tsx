'use client'

import { Artist } from '@/types/lidarr'
import { Card, CardContent } from './ui/card'
import { Play, AlbumIcon, RefreshCw } from 'lucide-react'
import { Button } from './ui/button'

export function ArtistCard({ artist }: { artist: Artist }) {
  const getArtistImage = (id: number, type: 'poster' | 'fanart' | 'banner' = 'poster') => {
    const baseUrl = process.env.NEXT_PUBLIC_LIDARR_BASE_URL
    const apiKey = process.env.NEXT_PUBLIC_LIDARR_API_KEY
    return `${baseUrl}/api/v1/mediacover/artist/${id}/${type}.jpg?apikey=${apiKey}`
  }

  return (
    <Card className="group relative overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl hover:border-white/20 transition-all">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <img
            src={getArtistImage(artist.id)}
            alt={artist.artistName}
            className="object-cover w-full h-full bg-black/50"
            onError={(e) => {
              const target = e.currentTarget
              target.src = getArtistImage(artist.id, 'fanart')
              target.onerror = () => {
                target.src = getArtistImage(artist.id, 'banner')
                target.onerror = () => {
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjUiLz48cGF0aCBkPSJNMjAgMjFhOCA4IDAgMSAwLTE2IDAiLz48L3N2Zz4='
                  target.onerror = null
                }
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white truncate">{artist.artistName}</h3>
            <p className="text-sm text-white/70 truncate">{artist.genres?.join(', ') || 'No genres'}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <Button size="icon" variant="ghost" className="h-10 w-10">
              <Play className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10">
              <AlbumIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10">
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}