export interface Artist {
  id: number
  artistName: string
  foreignArtistId: string
  tadbId?: number
  discogsId?: number
  overview?: string
  artistType?: string
  disambiguation?: string
  links?: Array<{
    url: string
    name: string
  }>
  images?: Array<{
    url: string
    coverType: string
    remoteUrl?: string
  }>
  path?: string
  qualityProfileId?: number
  languageProfileId?: number
  metadataProfileId?: number
  monitored?: boolean
  genres?: string[]
  cleanName?: string
  sortName?: string
  tags?: number[]
  added?: string
  statistics?: {
    albumCount: number
    trackFileCount: number
    trackCount: number
    totalTrackCount: number
    sizeOnDisk: number
    percentOfTracks: number
  }
  ratings?: {
    votes: number
    value: number
  }
  status?: string
}

export interface Album {
  id: number
  title: string
  artistId: number
  artist: string
  releaseDate: string
  trackCount: number
  images: Array<{
    url: string
    coverType: string
  }>
}

export interface QueueItem {
  id: number;
  artistId?: number;
  albumId?: number;
  artist?: Artist;
  album?: Album;
  quality?: QualityModel;
  size: number;
  title: string;
  sizeleft: number;
  status: string;
  trackedDownloadStatus: string;
  trackedDownloadState: string;
  statusMessages?: Array<{
    title: string;
    messages: string[];
  }>;
  errorMessage?: string;
  downloadId?: string;
  protocol?: string;
  downloadClient?: string;
  indexer?: string;
  outputPath?: string;
  progress: number;
}

export interface ImportList {
  id: number
  name: string
  source: string
  enabled: boolean
}

interface Quality {
  id: number;
  name: string;
}

interface Revision {
  version: number;
  real: number;
  isRepack: boolean;
}

interface QualityModel {
  quality: Quality;
  revision: Revision;
} 