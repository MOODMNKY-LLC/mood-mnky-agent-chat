import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { DockDemo } from "@/components/dock-demo";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import ShinyButton from "@/components/ui/shiny-button";
import { MoodCrafterStreaming } from "@/components/mood-crafter-streaming";
import HeroVideoDialog from "@/components/ui/hero-video-dialog"; // Import HeroVideoDialog

export default function MoodMnkyPage() {
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-zinc-100 p-8">
        <div className="container mx-auto max-w-4xl text-center bg-zinc-900/70 p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">MOOD MNKY</h1>
          <h2 className="text-3xl font-semibold mb-8 animate-fade-in-delay-1">The Personal Vibe Creator</h2>
          <p className="text-xl mb-12 italic animate-fade-in-delay-2 text-zinc-400">
            "Craft your personal vibe, scent the mood."
          </p>
        </div>
        
        <img src="/mood_mnky.png" alt="MOOD MNKY" className="w-64 h-64 rounded-full mb-4 mx-auto shadow-lg animate-fade-in-delay-3" />

        {/* DockDemo Component */}
        <DockDemo />

        {/* Break before overview section */}
        <div className="mt-8"></div>

        <div className="container mx-auto max-w-4xl space-y-8 mb-12 text-center">
          <Drawer>
            <DrawerTrigger asChild>
              <ShinyButton className="py-4 font-medium hover:underline">Mood's Dossier</ShinyButton>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex-1 p-4">
                  <DrawerHeader>
                    <DrawerDescription>
                      <section className="mb-4">
                        <h3 className="text-lg font-semibold">Who am I</h3>
                        <p className="text-sm text-muted-foreground">
                          MOOD MNKY is your personal vibe curator, designed to help you craft a fragrance that reflects your personality, mood, and the experience you want to create.
                        </p>
                      </section>
                      <section className="mb-4">
                        <h3 className="text-lg font-semibold">What I do</h3>
                        <p className="text-sm text-muted-foreground">
                          MOOD MNKY uses advanced AI to help you create a one-of-a-kind fragrance blend tailored specifically to your preferences.
                        </p>
                      </section>
                      <section className="mb-4">
                        <h3 className="text-lg font-semibold">Why choose me</h3>
                        <p className="text-sm text-muted-foreground">
                          MOOD MNKY is more than a fragrance tool—it's a journey into self-discovery.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-lg font-semibold">Skill set</h3>
                        <ul className="text-sm list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Personalized Fragrance Creation</li>
                          <li>Fragrance Library Access</li>
                          <li>Mood-Based Suggestions</li>
                          <li>Curated for Seasons and Events</li>
                        </ul>
                      </section>
                    </DrawerDescription>
                  </DrawerHeader>
                </div>
                <div className="flex-1 p-4 rounded-lg shadow-md">
                  <HeroVideoDialog
                    videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video URL
                    thumbnailSrc="/mood_dojo.png" // Use mood_dojo.png as the thumbnail
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
        </div>
        
        <Button asChild className="bg-black text-white hover:bg-zinc-800 text-lg font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">Return to Agent Selection</Link>
        </Button>
      </div>
    </div>
  );
}
