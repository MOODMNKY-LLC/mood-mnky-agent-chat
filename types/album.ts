export interface AlbumResource {
  id: number;
  title: string;
  artistId: number;
  monitored: boolean;
  releaseDate: string;
  genres: string[];
  overview?: string;
  ratings?: {
    votes: number;
    value: number;
  };
  artist?: {
    artistName: string;
    status: string;
  };
  statistics?: {
    trackCount: number;
    totalTrackCount: number;
    sizeOnDisk: number;
    percentOfTracks: number;
  };
  images?: Array<{
    coverType: string;
    url: string;
  }>;
} 