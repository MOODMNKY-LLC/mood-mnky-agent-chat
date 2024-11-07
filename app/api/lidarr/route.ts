import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Remove any trailing /api/v1 from the base URL
const LIDARR_BASE_URL = process.env.NEXT_PUBLIC_LIDARR_BASE_URL?.replace(/\/api\/v1\/?$/, '')
const LIDARR_API_KEY = process.env.NEXT_PUBLIC_LIDARR_API_KEY

// API endpoints based on Lidarr API spec
const ENDPOINTS = {
  artists: '/api/v1/artist',
  artist: (id: number) => `/api/v1/artist/${id}`,
  albums: '/api/v1/album',
  album: (id: number) => `/api/v1/album/${id}`,
  queue: '/api/v1/queue/details',
  calendar: '/api/v1/calendar'
} as const

// Add this export to mark the route as dynamic
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!LIDARR_BASE_URL || !LIDARR_API_KEY) {
    console.error('Lidarr configuration missing:', { 
      hasBaseUrl: !!LIDARR_BASE_URL, 
      hasApiKey: !!LIDARR_API_KEY 
    })
    return NextResponse.json({ 
      data: [], 
      error: 'Lidarr configuration missing' 
    }, { status: 500 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const id = searchParams.get('id')

    if (!action) {
      return NextResponse.json({ 
        data: [], 
        error: 'Missing action parameter' 
      }, { status: 400 })
    }

    const endpoint = ENDPOINTS[action as keyof typeof ENDPOINTS]
    
    if (!endpoint) {
      return NextResponse.json({ 
        data: [], 
        error: 'Invalid action' 
      }, { status: 400 })
    }

    if (typeof endpoint === 'function' && !id) {
      return NextResponse.json({ 
        data: [], 
        error: 'Missing ID parameter' 
      }, { status: 400 })
    }

    const url = `${LIDARR_BASE_URL}${typeof endpoint === 'function' ? endpoint(parseInt(id!)) : endpoint}`
    console.log('Fetching from Lidarr:', url)

    const response = await fetch(url, {
      headers: {
        'X-Api-Key': LIDARR_API_KEY,
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Lidarr API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json({ data: Array.isArray(data) ? data : [] })

  } catch (error) {
    console.error('Lidarr API error:', error)
    return NextResponse.json({ 
      data: [], 
      error: error instanceof Error ? error.message : 'Failed to fetch from Lidarr API' 
    }, { status: 500 })
  }
} 