"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { DockDemo } from "@/components/dock-demo";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import ShinyButton from "@/components/ui/shiny-button";
import { MoodCrafterStreaming } from "@/components/mood-crafter-streaming";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Ripple from "@/components/ui/ripple";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 mb-4 bg-transparent border border-gray-300 rounded-lg shadow-md">
    {children}
  </div>
);

export default function MoodMnkyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillSetRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/mood_dojo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
      
      <Ripple className="opacity-50 z-10" />
      
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-zinc-100 p-8">
        <header className="w-full max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            MOOD MNKY
          </h1>
          <div className="h-0.5 w-32 bg-zinc-400 mx-auto mb-4"></div>
          <h2 className="text-3xl font-light mb-6 animate-fade-in-delay-1">
            The Personal Vibe Creator
          </h2>
          <p className="text-xl italic animate-fade-in-delay-2 text-zinc-400">
            "Craft your personal vibe, scent the mood."
          </p>
        </header>
        
        <img src="/mood_mnky.png" alt="MOOD MNKY" className="w-64 h-64 rounded-full mb-8 mx-auto shadow-lg animate-fade-in-delay-3" />

        <DockDemo />

        <div className="mt-12"></div>

        <Drawer>
          <DrawerTrigger asChild>
            <ShinyButton className="py-4 font-medium hover:underline">Mood's Dossier</ShinyButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col md:flex-row md:space-x-8" ref={containerRef}>
              <div className="flex-1 p-4">
                <DrawerHeader>
                  <DrawerDescription>
                    <Card>
                      <ScrollArea className="h-64">
                        <h3 className="text-lg font-semibold">Who am I</h3>
                        <p className="text-sm text-muted-foreground">
                          MOOD MNKY is your personal vibe curator, designed to help you craft a fragrance that reflects your personality, mood, and the experience you want to create.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">What I do</h3>
                        <p className="text-sm text-muted-foreground">
                          MOOD MNKY uses advanced AI to help you create a one-of-a-kind fragrance blend tailored specifically to your preferences.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">Why choose me</h3>
                        <p className="text-sm text-muted-foreground">
                          MOOD MNKY is more than a fragrance tool—it's a journey into self-discovery.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">Skill set</h3>
                        <ul className="text-sm list-disc list-inside space-y-2 text-muted-foreground" ref={skillSetRef}>
                          <li>Personalized Fragrance Creation</li>
                          <li>Fragrance Library Access</li>
                          <li>Mood-Based Suggestions</li>
                          <li>Curated for Seasons and Events</li>
                        </ul>
                      </ScrollArea>
                    </Card>
                    <Card>
                      <h3 className="text-lg font-semibold">Additional Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Here you can add more details or any other content you want to display in this card.
                      </p>
                    </Card>
                  </DrawerDescription>
                </DrawerHeader>
              </div>
              <div className="flex-1 p-4 rounded-lg shadow-md">
                <HeroVideoDialog
                  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  thumbnailSrc="/mood_dojo.png"
                  thumbnailAlt="Video thumbnail"
                />
              </div>
              <div className="flex-1 p-4">
                <MoodCrafterStreaming />
              </div>
            </div>
            <DrawerClose asChild>
              <button className="mt-4">Close</button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>

        <Button asChild className="mt-8 bg-black text-white hover:bg-zinc-800 text-lg font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">Return to Agent Selection</Link>
        </Button>
      </div>
    </div>
  );
}
