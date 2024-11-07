import type { Database } from './schema'

export type Tables = Database['public']['Tables']
export type ArtistRow = Tables['artists']['Row']
export type ArtistInsert = Tables['artists']['Insert']
export type ArtistUpdate = Tables['artists']['Update']
export type AlbumRow = Tables['albums']['Row']
export type AlbumInsert = Tables['albums']['Insert']
export type AlbumUpdate = Tables['albums']['Update']

export interface SyncOptions {
  force?: boolean
  batchSize?: number
}

export interface SyncResult {
  success: boolean
  count: number
  errors?: Error[]
} 