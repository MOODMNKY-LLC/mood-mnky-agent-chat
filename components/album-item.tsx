import { AlbumResource } from '@/types/album';

interface AlbumItemProps {
  album: AlbumResource;
}

export default function AlbumItem({ album }: AlbumItemProps) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{album.title}</h3>
      <p className="text-gray-700">
        {album.artist?.artistName ?? 'Unknown Artist'} - {album.artist?.status ?? 'Unknown Status'}
      </p>
    </div>
  );
} 