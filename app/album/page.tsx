import { fetchAlbums } from '@/lib/lidarr-api';
import AlbumList from '@/components/album-list';

export default async function AlbumPage() {
  const albums = await fetchAlbums();

  return (
    <div>
      {albums.length > 0 ? (
        <AlbumList albums={albums} />
      ) : (
        <div className="text-center py-10">
          <p>No albums available</p>
        </div>
      )}
    </div>
  );
}

// Add dynamic configuration to prevent static optimization
export const dynamic = 'force-dynamic'; 