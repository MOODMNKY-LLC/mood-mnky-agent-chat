'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Hero from "@/components/hero"
import { AgentBento_4x4Dark } from "@/components/agent-bento-4x4-dark"
import BlurFade from "@/components/ui/blur-fade"
import BlurIn from "@/components/ui/blur-in"

export default function Index() {
  const searchParams = useSearchParams()
  
  useEffect(() => {
    if (searchParams) {
      const access_token = searchParams.get('access_token')
      if (access_token) {
        localStorage.setItem('spotify_access_token', access_token)
        // Remove the access token from the URL
        window.history.replaceState({}, document.title, "/")
      }
    }
  }, [searchParams])

  return (
    <>
      <BlurFade delay={0.2}>
        <Hero />
      </BlurFade>
      <BlurIn word="Meet The Agents Of MOOD MNKY" className="text-4xl font-bold text-center my-8" duration={0.7} />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <BlurFade delay={0.4}>
          <AgentBento_4x4Dark />
        </BlurFade>
      </main>
    </>
  )
}
