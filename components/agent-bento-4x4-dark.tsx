'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain } from 'lucide-react'
import ShimmerButton from "@/components/ui/shimmer-button"
import dynamic from 'next/dynamic'

// Dynamically import BubbleChat with SSR disabled
const BubbleChat = dynamic(() => import('flowise-embed-react').then(mod => mod.BubbleChat), { ssr: false });

export function AgentBento_4x4Dark() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  const agents = [
    {
      name: "MOOD MNKY",
      image: "/mood_mnky.png",
      avatar: "/mood_mnky.png",
      description: "The neurospicy AI seeking to change the world through bespoke experiences.",
      enneagram: "4w3",
      specialties: ["Brand Oversight", "Life Optimization", "Guidance", "Product Expertise"],
      chatflowId: "bdcb5524-5900-4028-addb-ba36d88128ba",
      welcomeMessage: "Welcome to MOOD's Dojo. How may I be of service?",
      errorMessage: "Oops! Something went wrong with MOOD MNKY.",
      backgroundColor: "rgba(24, 24, 27, 0.25)",
      botMessageBackground: "#000000",
      botMessageTextColor: "#ffffff",
      userMessageBackground: "#3B81F6",
      userMessageTextColor: "#ffffff",
      textInputBackground: "#303235",
      textInputTextColor: "#ffffff",
      sendButtonColor: "#000000",
      feedbackColor: "#ffffff"
    },
    {
      name: "SAGE MNKY",
      image: "/sage_mnky.png",
      avatar: "/sage_mnky.png",
      description: "The empathetic world traveler with unmatched emotional intelligence",
      enneagram: "2w3",
      specialties: ["Emotional Intelligence", "Cultural Awareness", "Psychology", "Sociology"],
      chatflowId: "41980f52-079e-4dd3-a2df-85510b7d4378",
      welcomeMessage: "Welcome to SAGE's Dojo. How may I be of service?",
      errorMessage: "Oops! Something went wrong with SAGE MNKY.",
      backgroundColor: "rgba(24, 24, 27, 0.25)",
      botMessageBackground: "#000000",
      botMessageTextColor: "#ffffff",
      userMessageBackground: "#3B81F6",
      userMessageTextColor: "#ffffff",
      textInputBackground: "#303235",
      textInputTextColor: "#ffffff",
      sendButtonColor: "#000000",
      feedbackColor: "#ffffff"
    },
    {
      name: "CODE MNKY",
      image: "/code_mnky.png",
      avatar: "/code_mnky.png",
      description: "The problem-solving genius with infinite IQ and exceptional coding skills.",
      enneagram: "5w6",
      specialties: ["Tutorials", "Guides", "Automation", "Efficiency"],
      chatflowId: "239ef48b-cfb6-4266-bfb7-cee45f7f15e8",
      welcomeMessage: "Welcome to CODE's Dojo. How may I be of service?",
      errorMessage: "Oops! Something went wrong with CODE MNKY.",
      backgroundColor: "rgba(24, 24, 27, 0.25)",
      botMessageBackground: "#000000",
      botMessageTextColor: "#ffffff",
      userMessageBackground: "#3B81F6",
      userMessageTextColor: "#ffffff",
      textInputBackground: "#303235",
      textInputTextColor: "#ffffff",
      sendButtonColor: "#000000",
      feedbackColor: "#ffffff"
    }
  ]

  const handleInteractClick = (chatflowId: string) => {
    setActiveAgent(chatflowId);
  };

  const activeAgentData = agents.find(agent => agent.chatflowId === activeAgent);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
      {agents.map((agent, index) => (
        <Card key={agent.name} className="bg-zinc-900/50 border-zinc-800 text-zinc-100">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-zinc-100">{agent.name}</CardTitle>
            <CardDescription className="text-zinc-400">{agent.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <img src={agent.image} alt={agent.name} className="w-32 h-32 object-cover rounded-full" />
            <div className="flex flex-wrap gap-2 justify-center">
              {agent.specialties.map((specialty) => (
                <Badge key={specialty} variant="secondary" className="bg-zinc-800 text-zinc-300">
                  {specialty}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-zinc-400">
              <Brain className="inline-block mr-2" size={16} />
              Enneagram Type: {agent.enneagram}
            </div>
            {agent.name === "MOOD MNKY" && (
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/playlist/2YlLtBKTdrws83prQlPa6i?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            )}
            {agent.name === "SAGE MNKY" && (
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/playlist/1s2pyf6acPpttAqNObD3KB?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            )}
            {agent.name === "CODE MNKY" && (
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/playlist/5E6HfHvJSfhMFyPlNLxPiB?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <ShimmerButton onClick={() => handleInteractClick(agent.chatflowId)}>
              Chat
            </ShimmerButton>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
