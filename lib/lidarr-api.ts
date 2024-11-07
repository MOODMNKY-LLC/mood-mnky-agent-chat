import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const lidarrBaseUrl = process.env.NEXT_PUBLIC_LIDARR_BASE_URL!;
const lidarrApiKey = process.env.NEXT_PUBLIC_LIDARR_API_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchAlbums(artistId?: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_LIDARR_BASE_URL}/api/v1/album${artistId ? `?artistId=${artistId}` : ''}`
    const response = await fetch(url, {
      headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_LIDARR_API_KEY! },
      // Add next.js fetch cache options
      next: {
        revalidate: 3600 // Revalidate every hour
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch albums: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching albums:', error)
    // Return empty array instead of throwing during build
    return []
  }
}

export async function fetchAlbumById(id: number) {
  const url = `${lidarrBaseUrl}/album/${id}`;
  const response = await fetch(url, {
    headers: { 'X-Api-Key': lidarrApiKey }
  });

  if (!response.ok) throw new Error(`Failed to fetch album with id ${id}`);
  return response.json();
}

export async function fetchArtists() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LIDARR_BASE_URL}/api/v1/artist`, {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_LIDARR_API_KEY!
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch artists: ${response.statusText}`)
  }

  return response.json()
}

const BASE_URL = process.env.NEXT_PUBLIC_LIDARR_BASE_URL
const API_KEY = process.env.NEXT_PUBLIC_LIDARR_API_KEY

const headers = {
  'X-Api-Key': API_KEY!,
  'Content-Type': 'application/json',
}

// Fetch calendar data with a default range of next 30 days
export async function fetchCalendar() {
  const start = new Date().toISOString()
  const end = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  const response = await fetch(
    `${BASE_URL}/api/v1/calendar?start=${start}&end=${end}&includeArtist=true`,
    { headers }
  )
  if (!response.ok) throw new Error('Failed to fetch calendar')
  return response.json()
}

// Fetch disk space information
export async function fetchDiskSpace() {
  const response = await fetch(`${BASE_URL}/api/v1/diskspace`, { headers })
  if (!response.ok) throw new Error('Failed to fetch disk space')
  return response.json()
}

// Fetch queue items
export async function fetchQueue() {
  const response = await fetch(
    `${BASE_URL}/api/v1/queue/details?includeArtist=true&includeAlbum=true`,
    { headers }
  )
  if (!response.ok) throw new Error('Failed to fetch queue')
  return response.json()
}

// Fetch health check information
export async function fetchHealth() {
  const response = await fetch(`${BASE_URL}/api/v1/health`, { headers })
  if (!response.ok) throw new Error('Failed to fetch health status')
  return response.json()
}

// Fetch wanted/missing albums
export async function fetchWantedAlbums() {
  const response = await fetch(
    `${BASE_URL}/api/v1/wanted/cutoff?includeArtist=true&monitored=true`,
    { headers }
  )
  if (!response.ok) throw new Error('Failed to fetch wanted albums')
  return response.json()
}

// Add error handling wrapper for all API calls
export async function fetchWithErrorHandling(apiCall: () => Promise<any>) {
  try {
    return await apiCall()
  } catch (error) {
    console.error('API Error:', error)
    throw new Error(error instanceof Error ? error.message : 'An error occurred')
  }
}

export async function fetchHistory() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LIDARR_BASE_URL}/api/v1/history?page=1&pageSize=10&sortDirection=descending&sortKey=date`,
    {
      headers: {
        'X-Api-Key': process.env.NEXT_PUBLIC_LIDARR_API_KEY!,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch history');
  }

  return response.json();
}