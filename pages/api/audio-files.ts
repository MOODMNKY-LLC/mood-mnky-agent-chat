import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { agent } = req.query

  let audioDir: string

  if (!agent || typeof agent !== 'string') {
    // If no agent is specified, use the main audio directory
    audioDir = path.join(process.cwd(), 'public', 'audio')
  } else {
    // If an agent is specified, use the agent-specific directory
    audioDir = path.join(process.cwd(), 'public', 'audio', agent)
  }
  
  try {
    if (!fs.existsSync(audioDir)) {
      return res.status(404).json({ error: 'Audio directory not found' })
    }

    const files = fs.readdirSync(audioDir)
    const audioFiles = files.filter(file => file.endsWith('.mp3'))
    res.status(200).json(audioFiles)
  } catch (error) {
    console.error(`Error reading audio directory:`, error)
    res.status(500).json({ error: 'Failed to read audio files' })
  }
}
