import { Suspense } from 'react';
import { fetchAlbumById } from '@/lib/lidarr-api';
import { AlbumDetails } from '@/components/album-details';

export default async function AlbumDetailsPage({ params }: { params: { id: string } }) {
  const album = await fetchAlbumById(Number(params.id));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AlbumDetails album={album} />
    </Suspense>
  );
} 