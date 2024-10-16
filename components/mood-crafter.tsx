'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, Loader2, Camera } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function PrettyJSON({ data }: { data: any }) {
  const text = data?.text || "No text available"; // Extract the "text" field
  return (
    <pre
      className="bg-muted p-4 rounded-md overflow-x-auto w-full text-sm"
      style={{
        tabSize: 2,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      }}
    >
      {text}
    </pre>
  )
}

export function MoodCrafterComponent() {
  const [mood, setMood] = useState('')
  const [photoReference, setPhotoReference] = useState<File | null>(null)
  const [response, setResponse] = useState<any>(null)
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

    const formData = new FormData()
    if (photoReference) {
      formData.append("files", photoReference)
    }
    formData.append("question", mood)
    formData.append("systemMessage", "example")
    formData.append("maxIterations", "1")
    formData.append("openAIApiKey", "example") // Add your key here

    try {
      const response = await fetch(
        "https://flowise-local.moodmnky.com/api/v1/prediction/bdcb5524-5900-4028-addb-ba36d88128ba",
        {
          method: "POST",
          body: formData
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      setResponse(result)
    } catch (error) {
      console.error("Error crafting your mood:", error)
      setError("An error occurred while crafting your mood. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">MOOD CRAFTER</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mood" className="text-lg">What's your mood...?</Label>
            <Textarea
              id="mood"
              placeholder="Describe your current mood here..."
              value={mood}
              onChange={handleMoodChange}
              className="min-h-[100px]"
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
            {loading ? 'Crafting Mood...' : 'Match My Mood'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {response && (
          <div className="w-full">
            <h3 className="font-semibold mb-2 text-lg">Your Crafted Mood:</h3>
            <PrettyJSON data={response} />
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
