import { syncArtists } from '@/lib/supabase/sync'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST() {
  try {
    await syncArtists(false)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Sync failed:', error)
    return NextResponse.json(
      { error: 'Failed to sync data' },
      { status: 500 }
    )
  }
} 