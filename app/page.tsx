'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Hero from "@/components/hero"
import { AgentBento_4x4Dark } from "@/components/agent-bento-4x4-dark"

export default function Index() {
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const access_token = searchParams.get('access_token')
    if (access_token) {
      localStorage.setItem('spotify_access_token', access_token)
      // Remove the access token from the URL
      window.history.replaceState({}, document.title, "/")
    }
  }, [searchParams])

  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <AgentBento_4x4Dark />
      </main>
    </>
  )
}
