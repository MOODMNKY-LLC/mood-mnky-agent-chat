'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, Loader2, Camera } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FlowiseClient } from 'flowise-sdk'

const client = new FlowiseClient({ baseUrl: 'https://flowise-local.moodmnky.com' });

function PrettyJSON({ data }: { data: any }) {
  return (
    <pre
      className="text-sm"
      style={{
        tabSize: 2,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export function MoodCrafterStreaming() {
  const [mood, setMood] = useState('')
  const [photoReference, setPhotoReference] = useState<File | null>(null)
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleMoodChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMood(e.target.value)
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotoReference(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResponse('')

    const formData = new FormData()
    if (photoReference) {
      formData.append("files", photoReference)
    }
    formData.append("question", mood)
    formData.append("systemMessage", "example")
    formData.append("maxIterations", "1")
    formData.append("openAIApiKey", "example") // Add your key here

    try {
      const prediction = await client.createPrediction({
        chatflowId: 'bdcb5524-5900-4028-addb-ba36d88128ba',
        question: mood,
        streaming: true,
      });

      for await (const chunk of prediction) {
        if (chunk.event === 'token') {
          setResponse(prev => prev + chunk.data)
        } else if (chunk.event === 'error') {
          throw new Error(chunk.data)
        }
      }
    } catch (error) {
      console.error("Error crafting your mood:", error)
      setError("An error occurred while crafting your mood. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">MOOD CRAFTER</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mood" className="text-lg">What's your mood...?</Label>
                <Textarea
                  id="mood"
                  placeholder="Describe your vibe..."
                  value={mood}
                  onChange={handleMoodChange}
                  className="min-h-[150px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo" className="text-lg">Photo Reference (optional)</Label>
                <div className="flex items-center space-x-2">
                  <Input id="photo" type="file" onChange={handlePhotoChange} className="flex-grow" />
                  <Camera className="h-6 w-6 text-gray-400" />
                </div>
              </div>
              <Button 
                type="submit" 
                disabled={loading || !mood}
                className="w-full py-6 text-lg font-semibold"
              >
                {loading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : null}
                {loading ? 'Scentsing the mood...' : 'Match My Mood'}
              </Button>
            </form>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-2">
            <h3 className="font-semibold text-lg">Your Crafted Mood:</h3>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              {response ? (
                <div>{response}</div>
              ) : (
                <p className="text-muted-foreground">Your crafted mood will appear here...</p>
              )}
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}