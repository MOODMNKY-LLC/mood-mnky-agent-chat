import { createClient } from '@supabase/supabase-js'
import type { SyncOptions, SyncResult } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function batchProcess<T>(
  items: T[],
  batchSize: number,
  processor: (batch: T[]) => Promise<void>
): Promise<SyncResult> {
  const result: SyncResult = { success: true, count: 0, errors: [] }
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    try {
      await processor(batch)
      result.count += batch.length
    } catch (error) {
      result.errors?.push(error as Error)
      result.success = false
    }
  }
  
  return result
} 