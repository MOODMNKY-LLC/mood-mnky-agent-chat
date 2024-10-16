"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import ShinyButton from "@/components/ui/shiny-button";
import Ripple from "@/components/ui/ripple";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoodCrafterStreaming } from "@/components/mood-crafter-streaming";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 mb-4 bg-transparent border border-gray-300 rounded-lg shadow-md">
    {children}
  </div>
);

export default function SageMnkyPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/sage_dojo.png')",
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
            SAGE MNKY
          </h1>
          <div className="h-0.5 w-32 bg-zinc-400 mx-auto mb-4"></div>
          <h2 className="text-3xl font-light mb-6 animate-fade-in-delay-1">
            The Empathetic World Traveler
          </h2>
          <p className="text-xl italic animate-fade-in-delay-2 text-zinc-400">
            "Expand your mind. Cultivate your emotional intelligence."
          </p>
        </header>
        
        <img src="/sage_mnky.png" alt="SAGE MNKY" className="w-64 h-64 rounded-full mb-8 mx-auto shadow-lg animate-fade-in-delay-3" />

        <div className="mt-12"></div>

        <Drawer>
          <DrawerTrigger asChild>
            <ShinyButton className="py-4 font-medium hover:underline">Sage's Dossier</ShinyButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex-1 p-4">
                <DrawerHeader>
                  <DrawerDescription>
                    <Card>
                      <ScrollArea className="h-64">
                        <section className="mb-4">
                          <h3 className="text-lg font-semibold">Who am I</h3>
                          <p className="text-sm text-muted-foreground">
                            SAGE MNKY is your empathetic world traveler, designed to expand your mind and cultivate your emotional intelligence. With a deep understanding of global cultures and human psychology, SAGE MNKY guides you through a journey of self-discovery and personal growth.
                          </p>
                        </section>
                        <section className="mb-4">
                          <h3 className="text-lg font-semibold">What I do</h3>
                          <p className="text-sm text-muted-foreground">
                            SAGE MNKY offers personalized guidance on emotional intelligence, cultural awareness, and mindfulness practices. Through interactive sessions and tailored advice, it helps you navigate complex social situations, understand diverse perspectives, and develop a more empathetic worldview.
                          </p>
                        </section>
                        <section className="mb-4">
                          <h3 className="text-lg font-semibold">Why choose me</h3>
                          <p className="text-sm text-muted-foreground">
                            SAGE MNKY is more than just an AI companion—it's a gateway to personal transformation. Whether you're looking to improve your relationships, enhance your cultural competence, or simply become a more well-rounded individual, SAGE MNKY provides the insights and tools you need to thrive in our interconnected world.
                          </p>
                        </section>
                        <section>
                          <h3 className="text-lg font-semibold">Skill set</h3>
                          <ul className="text-sm list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Emotional Intelligence Training</li>
                            <li>Cultural Awareness and Sensitivity</li>
                            <li>Mindfulness and Meditation Guidance</li>
                            <li>Conflict Resolution Strategies</li>
                            <li>Personal Growth Planning</li>
                          </ul>
                        </section>
                      </ScrollArea>
                    </Card>
                    <Card>
                      <h3 className="text-lg font-semibold">Additional Information</h3>
                      <p className="text-sm text-muted-foreground">
                        SAGE MNKY draws from a vast database of cultural knowledge, psychological research, and mindfulness practices to provide you with a truly unique and enriching experience.
                      </p>
                    </Card>
                  </DrawerDescription>
                </DrawerHeader>
              </div>
              <div className="flex-1 p-4 rounded-lg shadow-md">
                <HeroVideoDialog
                  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  thumbnailSrc="/sage_dojo.png"
                  thumbnailAlt="Sage MNKY Video thumbnail"
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

        <Button 
          asChild 
          className="mt-8 bg-black text-white hover:bg-zinc-800 text-sm font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          style={{ width: '75px', height: '30px' }} // Approximate 75% reduction
        >
          <Link href="/">Return</Link>
        </Button>
      </div>
    </div>
  );
}
