'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain } from 'lucide-react'
import ShimmerButton from "@/components/ui/shimmer-button"
import dynamic from 'next/dynamic'
import ShinyButton from "@/components/ui/shiny-button"
import Link from 'next/link'
import BlurFade from "@/components/ui/blur-fade"
import BgAudioPlayer from '@/components/bg-audio-player'

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
        <BlurFade key={agent.name} delay={index * 0.1}>
          <Card className="bg-zinc-900/50 border-zinc-800 text-zinc-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-zinc-100">
                <Link href={`/agents/${agent.name.toLowerCase().replace(' ', '-')}`}>
                  <ShinyButton className="w-full">
                    <span className="text-2xl font-bold">{agent.name}</span>
                  </ShinyButton>
                </Link>
              </CardTitle>
              <CardDescription className="text-zinc-400 text-center mt-2">{agent.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <BlurFade delay={0.2}>
                <img src={agent.image} alt={agent.name} className="w-32 h-32 object-cover rounded-full" />
              </BlurFade>
              <BlurFade delay={0.3}>
                <div className="flex flex-wrap gap-2 justify-center">
                  {agent.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="bg-zinc-800 text-zinc-300">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
              <BlurFade delay={0.4}>
                <div className="text-sm text-zinc-400">
                  <Brain className="inline-block mr-2" size={16} />
                  Enneagram Type: {agent.enneagram}
                </div>
              </BlurFade>
              <BlurFade delay={0.5}>
                <BgAudioPlayer agentName={agent.name.toLowerCase().replace(' ', '-')} />
              </BlurFade>
            </CardContent>
            <CardFooter className="flex justify-center">
              <BlurFade delay={0.8}>
                <ShimmerButton className="mt-4" onClick={() => handleInteractClick(agent.chatflowId)}>
                  Chat
                </ShimmerButton>
              </BlurFade>
            </CardFooter>
          </Card>
        </BlurFade>
      ))}
      {activeAgentData && (
        <div className="bubble-chat-rounded">
          <BubbleChat
            chatflowid={activeAgentData.chatflowId}
            apiHost="https://flowise-local.moodmnky.com"
            theme={{
              button: {
                backgroundColor: "#000000",
                right: 20,
                bottom: 20,
                size: 48,
                dragAndDrop: true,
                iconColor: "white",
                customIconSrc: "https://cdn.shopify.com/s/files/1/0693/4328/1426/files/mm-flame-logo-white.svg",
                autoWindowOpen: {
                  autoOpen: false,
                  openDelay: 2,
                  autoOpenOnMobile: false,
                },
              },
              tooltip: {
                showTooltip: false,
                tooltipMessage: 'Hi There 👋!',
                tooltipBackgroundColor: 'black',
                tooltipTextColor: 'white',
                tooltipFontSize: 10,
              },
              chatWindow: {
                showTitle: true,
                title: 'Agent Chat',
                titleAvatarSrc: '/splash-dark.png',
                showAgentMessages: true,
                welcomeMessage: activeAgentData.welcomeMessage,
                errorMessage: activeAgentData.errorMessage,
                backgroundColor: activeAgentData.backgroundColor,
                backgroundImage: activeAgentData.avatar,
                height: 700,
                width: 400,
                fontSize: 16,
                starterPromptFontSize: 15,
                clearChatOnReload: true,
                botMessage: {
                  backgroundColor: "rgba(25, 25, 25, 0.9)",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc: activeAgentData.avatar,
                },
                userMessage: {
                  backgroundColor: "rgba(59, 129, 246, 0.9)",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                  placeholder: 'Ask me anything!',
                  backgroundColor: '#191919',
                  textColor: '#c7c7c7',
                  sendButtonColor: '#000000',
                  maxChars: 280,
                  maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 280 characters.',
                  autoFocus: true,
                  sendMessageSound: true,
                  receiveMessageSound: true,
                },
                feedback: {
                  color: '#303235',
                },
                footer: {
                  textColor: '#303235',
                  text: 'Powered by',
                  company: 'MOODMNKY LLC',
                  companyLink: 'https://moodmnky.com',
                }
              }
            }}
          />
        </div>
      )}
    </div>
  )
}
