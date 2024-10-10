'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Brain } from 'lucide-react'
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
      music: ["Trip hop", "Classical", "Instrumental", "Electronica"],
      favoriteArtist: "Coldplay, Max Richter",
      chatflowId: "bdcb5524-5900-4028-addb-ba36d88128ba",
      welcomeMessage: "Welcome to MOOD's Dojo. How may I be of service?",
      errorMessage: "Oops! Something went wrong with MOOD MNKY.",
      backgroundColor: "rgba(24, 24, 27, 0.25)", // Zinc color with 25% opacity
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
      music: ["World Music", "Jazz", "Classical"],
      favoriteArtist: "Yanni, Enya",
      chatflowId: "41980f52-079e-4dd3-a2df-85510b7d4378",
      welcomeMessage: "Welcome to SAGE's Dojo. How may I be of service?",
      errorMessage: "Oops! Something went wrong with SAGE MNKY.",
      backgroundColor: "rgba(24, 24, 27, 0.25)", // Zinc color with 25% opacity
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
      music: ["Electronica", "Dubstep", "Detroit house", "Industrial", "Hip-hop", "Rap"],
      favoriteArtist: "Montana of 300",
      chatflowId: "239ef48b-cfb6-4266-bfb7-cee45f7f15e8",
      welcomeMessage: "Welcome to CODE's Dojo. How may I be of service?",
      errorMessage: "Oops! Something went wrong with CODE MNKY.",
      backgroundColor: "rgba(24, 24, 27, 0.25)", // Zinc color with 25% opacity
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
        <Card key={index} className="bg-zinc-900 border-zinc-800 opacity-80 flex flex-col justify-between">
          <div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-zinc-100">{agent.name}</CardTitle>
              <CardDescription className="text-zinc-400">Enneagram: {agent.enneagram}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <img src={agent.image} alt={agent.name} className="w-32 h-32 object-cover mb-3 rounded-full" />
              <p className="text-center mb-3 text-xs text-zinc-300">{agent.description}</p>
              <div className="flex flex-wrap gap-1 justify-center mb-3">
                {agent.specialties.map((specialty, i) => (
                  <Badge key={i} variant="outline" className="text-xs bg-zinc-800 text-zinc-300 border-zinc-700">{specialty}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-1 mb-1">
                <Music className="w-3 h-3 text-zinc-400" />
                <span className="font-semibold text-xs text-zinc-300">Music:</span>
              </div>
              <p className="text-xs text-center mb-2 text-zinc-400">{agent.music.join(", ")}</p>
              <div className="flex items-center gap-1">
                <Brain className="w-3 h-3 text-zinc-400" />
                <span className="font-semibold text-xs text-zinc-300">Favorite Artist:</span>
                <span className="text-xs text-zinc-400">{agent.favoriteArtist}</span>
              </div>
            </CardContent>
          </div>
          <CardFooter className="flex justify-center">
            <ShimmerButton className="mt-4" onClick={() => handleInteractClick(agent.chatflowId)}>
              Interact
            </ShimmerButton>
          </CardFooter>
        </Card>
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
                size: 48, // small | medium | large | number
                dragAndDrop: true,
                iconColor: "white",
                customIconSrc: "https://cdn.shopify.com/s/files/1/0693/4328/1426/files/mm-flame-logo-white.svg",
                autoWindowOpen: {
                  autoOpen: false, // parameter to control automatic window opening
                  openDelay: 2, // Optional parameter for delay time in seconds
                  autoOpenOnMobile: false, // parameter to control automatic window opening in mobile
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
                title: 'Agent Chat', // Static title
                titleAvatarSrc: '/splash-dark.png', // Static avatar
                showAgentMessages: true,
                welcomeMessage: activeAgentData.welcomeMessage,
                errorMessage: activeAgentData.errorMessage,
                backgroundColor: activeAgentData.backgroundColor,
                backgroundImage: activeAgentData.avatar, // Dynamically set background image
                height: 700,
                width: 400,
                fontSize: 16,
                // starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
                starterPromptFontSize: 15,
                clearChatOnReload: true, // If set to true, the chat will be cleared when the page reloads.
                botMessage: {
                  backgroundColor: "rgba(25, 25, 25, 0.9)", // 90% opacity for bot message background
                  textColor: "#ffffff", // Static bot message text color
                  showAvatar: true,
                  avatarSrc: activeAgentData.avatar, // Dynamic avatar for bot message
                },
                userMessage: {
                  backgroundColor: "rgba(59, 129, 246, 0.9)", // 90% opacity for user message background
                  textColor: "#ffffff", // Static user message text color
                  showAvatar: true,
                  avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                  placeholder: 'Ask me anything!',
                  backgroundColor: '#191919', // Static text input background
                  textColor: '#c7c7c7', // Static text input text color
                  sendButtonColor: '#000000', // Static send button color
                  maxChars: 280,
                  maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 280 characters.',
                  autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                  sendMessageSound: true,
                  // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                  receiveMessageSound: true,
                  // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                },
                feedback: {
                  color: '#303235', // Static feedback color
                },
                footer: {
                  textColor: '#303235', // Static footer text color
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