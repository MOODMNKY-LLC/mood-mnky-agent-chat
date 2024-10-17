import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const audioDir = path.join(process.cwd(), 'public', 'audio')
  
  try {
    const files = fs.readdirSync(audioDir)
    const audioFiles = files.filter(file => file.endsWith('.mp3'))
    res.status(200).json(audioFiles)
  } catch (error) {
    console.error('Error reading audio directory:', error)
    res.status(500).json({ error: 'Failed to read audio files' })
  }
}
