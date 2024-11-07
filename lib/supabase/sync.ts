import { fetchArtists } from '@/lib/lidarr-api'
import { supabase } from '@/lib/supabase'
import type { Artist } from '@/types/lidarr'

export async function syncArtists(force = false): Promise<void> {
  try {
    // First fetch artists from Lidarr API
    const lidarrArtists = await fetchArtists()

    // Then sync to Supabase
    const { error } = await supabase.from('artists').upsert(
      lidarrArtists.map((artist: Artist) => ({
        id: artist.id,
        artist_name: artist.artistName,
        sort_name: artist.sortName || null,
        foreign_artist_id: artist.foreignArtistId,
        overview: artist.overview || null,
        artist_type: artist.artistType || null,
        disambiguation: artist.disambiguation || null,
        monitored: artist.monitored || false,
        status: artist.status || null,
        images: artist.images || null,
        links: artist.links || null,
        path: artist.path || null,
        last_synced_at: new Date().toISOString()
      })),
      {
        onConflict: 'id'
      }
    )

    if (error) throw error
  } catch (error) {
    console.error('Error syncing artists:', error)
    throw error
  }
} 