'use client'

import React from "react"
import { Github, FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DockDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/20">
        <div className="flex space-x-2">
          <DockIcon icon={<Github className="h-6 w-6" />} label="GitHub" />
          <DockIcon icon={<FileText className="h-6 w-6" />} label="Notion" />
          <DockIcon icon={<MessageCircle className="h-6 w-6" />} label="WhatsApp" />
        </div>
      </div>
    </div>
  )
}

interface DockIconProps {
  icon: React.ReactNode
  label: string
}

function DockIcon({ icon, label }: DockIconProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative group w-12 h-12 rounded-full transition-all duration-300 ease-in-out hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
    >
      {icon}
      <span className="sr-only">{label}</span>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </div>
    </Button>
  )
}