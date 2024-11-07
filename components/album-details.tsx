'use client'

interface AlbumDetailsProps {
  album: {
    id: string
    title: string
    // Add other album properties as needed
  }
}

export function AlbumDetails({ album }: AlbumDetailsProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">{album.title}</h1>
      {/* Add more album details here */}
    </div>
  )
} 