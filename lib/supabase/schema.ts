export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      artists: {
        Row: {
          id: number
          created_at: string
          updated_at: string
          artist_name: string
          sort_name: string | null
          status: string | null
          ended: boolean
          foreign_artist_id: string
          overview: string | null
          artist_type: string | null
          disambiguation: string | null
          links: Json | null
          images: Json | null
          path: string | null
          last_synced_at: string
        }
        Insert: Omit<Database['public']['Tables']['artists']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['artists']['Insert']>
      }
      albums: {
        Row: {
          id: number
          created_at: string
          updated_at: string
          title: string
          artist_id: number
          // ... other album fields
        }
        Insert: Omit<Database['public']['Tables']['albums']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['albums']['Row']>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T] 