import { AlbumResource } from '@/types/album';
import AlbumItem from './album-item';

interface AlbumListProps {
  albums: AlbumResource[];
}

export default function AlbumList({ albums }: AlbumListProps) {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
} 