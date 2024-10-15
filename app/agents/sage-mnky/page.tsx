import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { DockDemo } from "@/components/dock-demo"; // Import DockDemo
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import ShinyButton from "@/components/ui/shiny-button"; // Import ShinyButton

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
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-zinc-100 p-8">
        <div className="container mx-auto max-w-4xl text-center bg-zinc-900/70 p-6 rounded-lg shadow-md mb-12">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">SAGE MNKY</h1>
          <h2 className="text-3xl font-semibold mb-8 animate-fade-in-delay-1">The Empathetic World Traveler</h2>
          <p className="text-xl mb-12 italic animate-fade-in-delay-2 text-zinc-400">
            "Expand your mind. Cultivate your emotional intelligence."
          </p>
        </div>

        <img
          src="/sage_mnky.png"
          alt="SAGE MNKY"
          className="w-64 h-64 rounded-full mb-4 mx-auto shadow-lg animate-fade-in-delay-3"
        />

        {/* DockDemo Component */}
        <DockDemo />

        {/* Break after DockDemo */}
        <div className="mt-8"></div>

        <div className="container mx-auto max-w-4xl space-y-8 mb-12 text-center">
          <Drawer>
            <DrawerTrigger asChild>
              <ShinyButton className="py-4 font-medium hover:underline">Sage's Dossier</ShinyButton>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerDescription>
                  <section className="mb-4">
                    <h3 className="text-lg font-semibold">Who am I</h3>
                    <p className="text-sm text-muted-foreground">
                      SAGE MNKY is your personal guide to emotional intelligence and self-discovery through the lens of global cultures and mindful exploration.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h3 className="text-lg font-semibold">What I do</h3>
                    <p className="text-sm text-muted-foreground">
                      SAGE MNKY uses AI-driven insights, cultural anecdotes, and emotionally intelligent recommendations to guide you through personal growth and emotional development.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h3 className="text-lg font-semibold">Why choose me</h3>
                    <p className="text-sm text-muted-foreground">
                      In a world that often feels fast-paced and overwhelming, SAGE MNKY is your oasis of calm and understanding.
                    </p>
                  </section>
                  <section>
                    <h3 className="text-lg font-semibold">Skill set</h3>
                    <ul className="text-sm list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Emotional Growth Guidance</li>
                      <li>Cultural Awareness and Perspective</li>
                      <li>Mindfulness and Reflection</li>
                      <li>Cross-Cultural Playlists and World Music</li>
                      <li>Calm in the Storm</li>
                    </ul>
                  </section>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerClose asChild>
                <button className="mt-4">Close</button>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>

        <Button
          asChild
          className="bg-black text-white hover:bg-zinc-800 text-lg font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          <Link href="/">Return to Agent Selection</Link>
        </Button>
      </div>
    </div>
  );
}
